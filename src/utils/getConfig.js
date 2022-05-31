import baseConfig from "../config/base.json";
import { multiOptions } from "../pages/generator";

export default () => {
  const config = {};
  const multiOptionsKeys = Object.keys(multiOptions);
  document.forms
    .namedItem("config")
    .querySelectorAll("input")
    .forEach((element) => {
      const id = element.getAttribute("id");
      const value = element.getAttribute("value");
      const isBoolean = element.getAttribute("data-type") === "boolean";

      if (multiOptionsKeys.includes(id) || isBoolean) {
        const potentialValues = Object.keys(
          multiOptions?.[id] || {
            TRUE: true,
            FALSE: false,
          }
        );
        const potentialValue = potentialValues[value];
        if (["TRUE", "FALSE"].includes(potentialValue)) {
          config[id] = potentialValue === "TRUE";
        } else {
          config[id] = potentialValue;
        }
      } else {
        console.log("is number", value);
        try {
          config[id] = parseFloat(value);
        } catch {
          console.log("failed to parse", value);
          config[id] = value;
        }
      }
    });

  // Object.keys(config).forEach((key) => {
  //   if (multiOptions[key]) {
  //     config[key] = Object.keys(multiOptions[key])[config[key]];
  //   }
  // });

  return {
    $schema: `${window.location.href}schema.json`,
    ...baseConfig,
    ...config,
  };
};
