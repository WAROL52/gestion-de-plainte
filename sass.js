import { writeFile, writeFileSync } from 'fs';
import sass from 'sass'


// console.log(sass);
// const result = sass.compile("./public/style.scss", {style: "compressed"});
const result = sass.compile("./public/style.scss");
// console.log(result.css); 
writeFileSync("./public/style.css",result.css)
console.log("compilation du app.scss en style.css Reussi...");