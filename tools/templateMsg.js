import ejs from "ejs"
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import path, { dirname, join } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url)); 

export const templateEmail = ejs.compile(readFileSync(join(__dirname,"msg.ejs"),{encoding:"utf-8"}));
