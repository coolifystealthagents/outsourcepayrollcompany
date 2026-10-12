#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

const appDir = path.join(process.cwd(), 'app');
const fleetPath = path.join(appDir, 'fleet-content.ts');
const moduleCache = new Map();

function resolveLocal(fromFile, specifier) {
  const base = path.resolve(path.dirname(fromFile), specifier);
  for (const candidate of [base, `${base}.ts`, `${base}.tsx`, path.join(base, 'index.ts')]) {
    if (fs.existsSync(candidate)) return candidate;
  }
  throw new Error(`Cannot resolve ${specifier} from ${fromFile}.`);
}

function loadTypeScriptModule(filename) {
  const resolved = path.resolve(filename);
  if (moduleCache.has(resolved)) return moduleCache.get(resolved).exports;

  const module = {exports: {}};
  moduleCache.set(resolved, module);
  const source = fs.readFileSync(resolved, 'utf8');
  const output = ts.transpileModule(source, {
    fileName: resolved,
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      esModuleInterop: true,
    },
    reportDiagnostics: true,
  });
  const errors = (output.diagnostics || []).filter((diagnostic) => diagnostic.category === ts.DiagnosticCategory.Error);
  if (errors.length) {
    throw new Error(ts.formatDiagnostics(errors, {
      getCanonicalFileName: (name) => name,
      getCurrentDirectory: () => process.cwd(),
      getNewLine: () => '\n',
    }));
  }

  const localRequire = (specifier) => {
    if (!specifier.startsWith('.')) return require(specifier);
    return loadTypeScriptModule(resolveLocal(resolved, specifier));
  };
  const execute = new Function('require', 'module', 'exports', '__filename', '__dirname', output.outputText);
  execute(localRequire, module, module.exports, resolved, path.dirname(resolved));
  return module.exports;
}

function importedResearchRecords(sourceFile) {
  const records = [];
  for (const statement of sourceFile.statements) {
    if (!ts.isImportDeclaration(statement) || !ts.isStringLiteral(statement.moduleSpecifier)) continue;
    const bindings = statement.importClause && statement.importClause.namedBindings;
    if (!bindings || !ts.isNamedImports(bindings)) continue;
    const importedModule = loadTypeScriptModule(resolveLocal(fleetPath, statement.moduleSpecifier.text));
    for (const element of bindings.elements) {
      const exportedName = (element.propertyName || element.name).text;
      const localName = element.name.text;
      const value = importedModule[exportedName];
      const candidates = Array.isArray(value) ? value : [value];
      if (!candidates.length || !candidates.every((item) => item && typeof item === 'object' && typeof item.slug === 'string')) continue;
      for (const post of candidates) records.push({localName, post});
    }
  }
  return records;
}

const source = fs.readFileSync(fleetPath, 'utf8');
const sourceFile = ts.createSourceFile(fleetPath, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
let declarationCount = 0;
for (const statement of sourceFile.statements) {
  if (!ts.isVariableStatement(statement)) continue;
  for (const declaration of statement.declarationList.declarations) {
    if (ts.isIdentifier(declaration.name) && declaration.name.text === 'researchPosts') declarationCount += 1;
  }
}
if (declarationCount !== 1) {
  console.error(`Expected exactly one researchPosts aggregate declaration; found ${declarationCount}.`);
  process.exit(1);
}

const fleetExports = loadTypeScriptModule(fleetPath);
const aggregate = fleetExports.researchPosts;
if (!Array.isArray(aggregate) || aggregate.length === 0) {
  console.error('researchPosts must be a non-empty array.');
  process.exit(1);
}

const objectCounts = new Map();
const slugOwners = new Map();
const duplicateSlugs = [];
for (const [index, post] of aggregate.entries()) {
  if (!post || typeof post !== 'object') {
    console.error(`researchPosts[${index}] is not an object.`);
    process.exit(1);
  }
  objectCounts.set(post, (objectCounts.get(post) || 0) + 1);
  if (typeof post.slug !== 'string' || !post.slug.trim()) {
    console.error(`researchPosts[${index}] has an empty or invalid slug.`);
    process.exit(1);
  }
  const prior = slugOwners.get(post.slug);
  if (prior !== undefined) {
    duplicateSlugs.push(`${post.slug} at aggregate indexes ${prior} and ${index}`);
  } else {
    slugOwners.set(post.slug, index);
  }
}
if (duplicateSlugs.length) {
  console.error(`Duplicate research slugs:\n- ${duplicateSlugs.join('\n- ')}`);
  process.exit(1);
}

const imported = importedResearchRecords(sourceFile);
if (!imported.length) {
  console.error('No imported research records were discovered.');
  process.exit(1);
}
for (const {localName, post} of imported) {
  const count = objectCounts.get(post) || 0;
  if (count !== 1) {
    console.error(`Imported research record ${post.slug} from ${localName} appears ${count} times in researchPosts; expected exactly once.`);
    process.exit(1);
  }
}

console.log(`Research aggregate has ${aggregate.length} unique posts and includes ${imported.length} imported records exactly once.`);
