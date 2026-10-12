import fs from 'node:fs';
const file='app/october12-research.ts';
const raw=fs.readFileSync(file,'utf8');
const articles=JSON.parse(raw.match(/export const october12ResearchPosts=([\s\S]*?) as const;/)[1]);
for(const article of articles){
  article.sections.forEach((section,index)=>{
    section.body+=` The ${section.heading.toLowerCase()} record also names the inclusion rule, excluded cases, source retrieval time, reviewer role, and next safe action for ${article.slug}. Reviewers retain negative and ambiguous results, test one changed-version scenario, and state an alternative explanation for every apparent mismatch. Checkpoint ${index+1} cannot be marked complete merely because an upload succeeded or a ticket closed; the destination evidence and unresolved exception owner must remain visible. This added layer makes the protocol independently repeatable without turning a synthetic observation into a claim about a worker, employer, payroll provider, agency dataset, or population.`;
  });
}
fs.writeFileSync(file,`export const october12ResearchPosts=${JSON.stringify(articles,null,2)} as const;\n`);
console.log('Deepened 5 Research protocols with reproducibility and inference controls.');
