import baseConfig from "../config/base.json";
import { multiOptions } from "../pages/generator";

export default () => {
  const config = {};
  document.forms
    .namedItem("config")
    .querySelectorAll("input")
    .forEach((element) => {
      const id = element.getAttribute("id");
      const value = element.getAttribute("value");
      const fieldType = element.getAttribute("data-type");

      if (fieldType === "boolean") {
        config[id] = value === "TRUE";
      } else {
        config[id] = +value;
      }
      
    });
  
  Object.keys(config).forEach((key) => {
    if (multiOptions[key]) {
      config[key] = Object.keys(multiOptions[key])[config[key]];
    }
  });
  
  return { "$schema": `${window.location.href}schema.json`,  ...baseConfig, ...config };
};
