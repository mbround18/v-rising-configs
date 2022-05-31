import hljs from "highlight.js";
import getConfig from "../utils/getConfig";

export function init() {
  const { value: htmlOut } = hljs.highlight(
    JSON.stringify(getConfig(), null, 4),
    { language: "json" }
  );
  console.log('loaded serverGameSettings.js');
  document.getElementById("json-output").innerHTML = htmlOut;
}
