/**
 * @typedef InputOptions
 * @property {string | undefined} id
 * @property {string} desc
 * @property {number | string | any} value
 * @property {string} type
 * @property {boolean} disabled
 */

import createLabel from "./createLabel";

export default /**
 * @param {string} id
 * @param {InputOptions} options
 * @returns {HTMLElement}
 */
(id, { desc, value, type, disabled, id: itemId } = {}) => {
  const div = document.createElement("div");
  div.setAttribute("id", `${id}-item-${type}`);
  let input;
  switch (type) {
    case "checkbox":
      input = `<input type="checkbox" id="${id}" value="${value}" ${
        value ? "checked" : ""
      }>`;
      break;
    case "radio":
      input = `< input type = "radio" id="${id}" value = "${value}" ${
        value ? "checked" : ""
      }> `;
      break;
    case "range":
      input = `<input type="range" id="${id}" value="${value}" min="0" max="${value}" step="1">`;
      break;
    case "select":
      input = `<selectid="${id}">`;
      value.forEach((item) => {
        input += `<option value="${item}" ${
          item ? "selected" : ""
        }>${item}</option>`;
      });
      input += "</select>";
      break;
    case "number":
      input = `<input type="number" id="${id}" value="${value}">`;
      break;
    default:
      input = `<input type="text" id="${id}" value="${value}">`;
      break;
  }
  if (id) {
    div.appendChild(createLabel(id, "input", id));
  }

  div.innerHTML = `
            ${div.innerHTML}
            ${input}
            <span id="${id}-desc" style="display: block;">${desc}</span>
        `;
  if (!!disabled) {
    div.style = "background-color: #ccc;";
    div.querySelector("input").setAttribute("disabled", "disabled");
  }
  div.querySelector("input").setAttribute("id", id);
  return div;
};
