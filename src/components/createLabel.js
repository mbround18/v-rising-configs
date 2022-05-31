export default /**
 * @param {string} id
 * @param {'fieldset' | 'input'} target
 * @param {string} text
 * @returns {HTMLElement}
 */
(id, target, text) => {
  // Create Fieldset
  const ele = document.createElement("label");
  ele.setAttribute("id", `${id}-label`);
  ele.setAttribute("for", `${id}-${target}`);
  ele.innerText = text;
  return ele;
};
