import fs from "node:fs";
import path from "node:path";
const root = process.cwd();
const required = ["index.html","assets/styles.css","assets/app.js","app/page.jsx","app/layout.jsx","app/globals.css","next.config.mjs","package.json","public/assets/app.js","public/assets/styles.css","career-assets/Md_Abdullah_Al_Owasi_Resume.docx","career-assets/Md_Abdullah_Al_Owasi_Cover_Letter.docx","career-assets/Md_Abdullah_Al_Owasi_Portfolio.docx","career-assets/Md_Abdullah_Al_Owasi_Presentation.pptx","career-assets/Governance_Evidence_Matrix.xlsx","career-assets/Governance_Evidence_Workbook.xlsx"];
const errors=[];
for(const file of required){ if(!fs.existsSync(path.join(root,file))) errors.push(`Missing ${file}`); }
const text = fs.readFileSync(path.join(root,"index.html"),"utf8");
for(const must of ["Governance systems built to turn risk into decisions.","abdullahalowasi369@gmail.com","Governance Systems","AI Use Cases","Buyer Diligence Paths","Vendor-Risk Questions","data-count=\"10\"","data-count=\"15\"","data-count=\"25\"","data-count=\"20\"","https://wa.me/601163994321"]){ if(!text.includes(must)) errors.push(`Missing required content: ${must}`); }
const pkg = JSON.parse(fs.readFileSync(path.join(root,"package.json"),"utf8"));
for(const banned of ["lenis","recharts","d3","framer-motion","motion","lucide-react","tailwindcss"]){ if(pkg.dependencies?.[banned] || pkg.devDependencies?.[banned]) errors.push(`Forbidden fragile dependency present: ${banned}`); }
const css = fs.readFileSync(path.join(root,"assets/styles.css"),"utf8");
let balance=0; for(const char of css){ if(char==="{") balance++; if(char==="}") balance--; if(balance<0) break; }
if(balance!==0) errors.push("CSS brace balance failed");
if(errors.length){ console.error(errors.join("\n")); process.exit(1); }
console.log("Preflight passed: static fallback + Next static-export source are present.");
