export default /**
 * @param {string} id
 * @returns {HTMLElement}
 */
(id) => {
  // Create Fieldset
  const fieldSet = document.createElement("fieldset");
  fieldSet.setAttribute("id", `${id}-fieldset`);
  return fieldSet;
};
