import { remark } from "remark";
import { toVFile } from "to-vfile";

const file = await toVFile.read("./example.mdx");
const result = await remark().process(file);

console.log("v7 RESULTS:", result.toString());
