import createFieldSet from "../components/createFieldSet";
import createInput from "../components/createInput";
import createLabel from "../components/createLabel";

export default /**
 * @param {string} id
 * @param {import("../components/createInput").InputOptions[]} items
 * @param {import("./createFieldSetWithOptions").Config} config
 */
(id, items, config = {}) => {
  const fieldset = createFieldSet(id);
  fieldset.setAttribute("class", "fieldset-multi-input");
  const label = createLabel(
    id,
    "fieldset",
    config?.desc ? `${id} - ${config.desc}` : id
  );
  document.getElementById("config").appendChild(label);
  items.forEach((item, index) => {
    fieldset.appendChild(createInput(item.id, item));
    if (index < items.length - 1) {
      fieldset.appendChild(document.createElement("hr"));
    }
  });
  document.getElementById("config").appendChild(fieldset);
};
