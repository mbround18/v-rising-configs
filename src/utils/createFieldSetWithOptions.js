/**
 * @typedef Config
 * @property {number} step
 * @property {number} value
 * @property {string} desc
 * @property {boolean} disabled
 */

import createFieldSet from "../components/createFieldSet";
import createInput from "../components/createInput";
import createLabel from "../components/createLabel";

/**
 *
 * @param {string} id
 * @param {*} options
 * @param {Config} config
 */
function createFieldSetWithOptions(id, options, config) {
  const fieldSet = createFieldSet(id);

  // Attach Label
  const label = createLabel(
    id,
    "fieldset",
    config?.desc ? `${id} - ${config.desc}` : id
  );
  document.getElementById("config").appendChild(label);

  // Attach Options
  const entries = Object.entries(options);
  // const rangeLabel = createLabel(id, 'input', id);

  const rangeInput = document.createElement("input");
  rangeInput.setAttribute("id", id);
  rangeInput.setAttribute("type", "range");
  rangeInput.setAttribute("min", "0");
  rangeInput.setAttribute("max", `${entries.length - 1}`);
  rangeInput.setAttribute("value", `${config?.value || 0}`);
  rangeInput.setAttribute("step", `${config?.step || 1}`);

  const optionsKeys = Object.keys(options);

  if (optionsKeys.includes('TRUE') && optionsKeys.includes('FALSE')) {
    rangeInput.setAttribute('data-type', 'boolean');
  }


  if (config?.disabled) {
    rangeInput.setAttribute("disabled", "disabled");
    fieldSet.style = "background-color: #ccc;";
  }
  rangeInput.onchange = () => {
    // Setup Information
    const current = rangeInput.value;
    const previous = rangeInput.getAttribute("data-prev-value") || 0;
    const keys = Object.keys(options);

    // Set Desciption
    const currentId = `${id}-descriptions-${keys[current]}`;
    const previousId = `${id}-descriptions-${keys[previous]}`;
    document.getElementById(currentId).style = "display: show;";
    document.getElementById(previousId).style = "display: none;";

    // Set Option
    const currentOption = `${id}-option-${keys[current]}`;
    const previousOption = `${id}-option-${keys[previous]}`;
    document.getElementById(currentOption).setAttribute("class", "selected");
    document.getElementById(previousOption).removeAttribute("class");

    // Set Range Input
    rangeInput.setAttribute("data-prev-value", current);
  };
  // Create Descriptions
  const rangeDescriptions = document.createElement("div");
  rangeDescriptions.setAttribute("id", `${id}-descriptions`);

  // Create Container
  const rangeContainer = document.createElement("div");
  rangeContainer.setAttribute("id", `${id}-container`);
  rangeContainer.setAttribute("class", "range-container");

  // Attach Options Container
  const rangeOptions = document.createElement("div");
  rangeOptions.setAttribute("id", `${id}-options`);
  rangeOptions.setAttribute("class", "range-options");

  entries.forEach(([option, desc], i) => {
    // Append Description
    const optionElement = document.createElement("span");
    optionElement.innerText = `${desc}`;
    if (i === +`${config?.value || 0}`) {
      optionElement.style = "display: show;";
      rangeInput.setAttribute("data-prev-value", `${i}`);
    } else {
      optionElement.style = "display: none;";
    }
    optionElement.setAttribute("id", `${id}-descriptions-${option}`);
    rangeDescriptions.appendChild(optionElement);

    // Append Option
    const optionContainer = document.createElement("div");
    optionContainer.setAttribute("id", `${id}-option-${option}`);
    optionContainer.innerText = `${option}`;
    if (i === +`${config?.value || 0}`) {
      optionContainer.setAttribute("class", "selected");
    }
    if (!config?.disabled) {
      optionContainer.onclick = () => {
        rangeInput.value = `${i}`;
        const event = new Event("change", { target: rangeInput });
        rangeInput.onchange(event);
      };
    }
    rangeOptions.appendChild(optionContainer);
  });

  // Append Elements
  rangeContainer.appendChild(rangeOptions);
  rangeContainer.appendChild(rangeInput);
  // fieldSet.appendChild(rangeLabel);
  fieldSet.appendChild(rangeContainer);
  fieldSet.appendChild(rangeDescriptions);

  document.getElementById("config").appendChild(fieldSet);
}

export default createFieldSetWithOptions;
