import fs from "node:fs";
const errors=[];
for(const file of ["out/index.html","out/404.html"]){ if(!fs.existsSync(file)) errors.push(`Missing ${file}`); }
if(fs.existsSync("out/index.html")){
 const html=fs.readFileSync("out/index.html","utf8");
 for(const must of ["assets/app.js","Governance systems built to turn risk into decisions.","abdullahalowasi369@gmail.com"]){ if(!html.includes(must)) errors.push(`Output missing ${must}`); }
}
if(errors.length){ console.error(errors.join("\n")); process.exit(1); }
console.log("Static export verified.");
