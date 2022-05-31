import "virtual:fonts.css";
import Router from "./router";
import getConfig from "./utils/getConfig";

export const routes = new Router();
routes.add("Nav-Generator", () => import("./pages/generator"));
routes.add("Nav-ServerGameSettings", () =>
  import("./pages/serverGameSettings")
);
routes.switch("Nav-Generator");

document.getElementById('generate-btn').onclick = () => routes.switch('Nav-ServerGameSettings')

const navBtns = document.querySelectorAll("nav button[data-route]") || [];
navBtns.forEach((e) => {
  e.onclick = () => routes.switch(e.getAttribute("id"));
});

// document.querySelector("[data-share]").onclick = () => {
//   const loc = window.location.href;
//   console.log(loc, JSON.stringify(getConfig()));
//   const base = window.btoa(JSON.stringify(getConfig()));
//   console.log(base);
//   const config = encodeURIComponent(base);
//   console.log(config);
//   const url = `${loc}?config=${config}`;
//   console.log(url);
// };

document.querySelector("[data-copy]").onclick = () => {
  /* Get the text field */
  const input = document.createElement("textarea");
  input.style.display = "none";
  input.value = JSON.stringify(getConfig(), null, 2);
  input.setAttribute("id", "copy-input");

  /* Select the text field */
  input.select();
  input.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(input.value);

  alert("Copied to clipboard: ServerGameSettings.json");
};
