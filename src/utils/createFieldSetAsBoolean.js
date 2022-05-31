import createFieldSetWithOptions from "./createFieldSetWithOptions";

/**
 *
 * @param {string} id
 * @param {import("./createFieldSetWithOptions").Config} config
 */
function createFieldSetAsBoolean(id, config = { value: false }) {
  const modifiedConfig = {
    ...config,
  };
  modifiedConfig.value = config.value ? 0 : 1;

  createFieldSetWithOptions(
    id,
    {
      TRUE: "Option Enabled",
      FALSE: "Option Disabled",
    },
    modifiedConfig
  );
}

export default createFieldSetAsBoolean;
