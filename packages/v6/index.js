import { remark } from "remark";
import vfile from "to-vfile";

const file = await vfile.read("./example.mdx");
const result = await remark().process(file);

console.log("v6 RESULTS:", result.toString());
