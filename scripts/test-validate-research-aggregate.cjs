#!/usr/bin/env node
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const {spawnSync} = require('node:child_process');

const root = process.cwd();
const validator = path.join(root, 'scripts', 'validate-research-aggregate.cjs');
const originalFleet = fs.readFileSync(path.join(root, 'app', 'fleet-content.ts'), 'utf8');

function runCase(name, transform, expectedStatus) {
  const fixture = fs.mkdtempSync(path.join(os.tmpdir(), 'research-aggregate-'));
  try {
    fs.cpSync(path.join(root, 'app'), path.join(fixture, 'app'), {recursive: true});
    const fleetPath = path.join(fixture, 'app', 'fleet-content.ts');
    fs.writeFileSync(fleetPath, transform(originalFleet));
    const result = spawnSync(process.execPath, [validator], {cwd: fixture, encoding: 'utf8'});
    if ((result.status === 0) !== (expectedStatus === 0)) {
      console.error(`${name}: expected exit ${expectedStatus}, got ${result.status}.`);
      console.error(result.stdout);
      console.error(result.stderr);
      process.exit(1);
    }
  } finally {
    fs.rmSync(fixture, {recursive: true, force: true});
  }
}

runCase('valid aggregate', (source) => source, 0);
runCase(
  'duplicate spread',
  (source) => source.replace('...october12ResearchPosts,', '...october12ResearchPosts, ...october12ResearchPosts,'),
  1,
);
runCase(
  'missing imported batch with alternate spacing',
  (source) => source
    .replace("import {october12ResearchPosts}", "import { october12ResearchPosts }")
    .replace('...october12ResearchPosts, ', ''),
  1,
);

console.log('Research aggregate validator mutation tests passed.');
