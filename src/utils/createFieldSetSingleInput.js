import createFieldSet from "../components/createFieldSet";
import createInput from "../components/createInput";
import createLabel from "../components/createLabel";

export default /**
 * @param {string} id
 * @param {import("../components/createInput").InputOptions} item
 * @param {import("./createFieldSetWithOptions").Config} config
 */
(id, item, config = {}) => {
  const fieldset = createFieldSet(id);
  fieldset.setAttribute("class", "fieldset-multi-input");
  const label = createLabel(
    id,
    "fieldset",
    config?.desc ? `${id} - ${config.desc}` : id
  );
  document.getElementById("config").appendChild(label);
  fieldset.appendChild(createInput(id, item));
  document.getElementById("config").appendChild(fieldset);
};
