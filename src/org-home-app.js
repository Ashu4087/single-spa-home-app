import singleSpaSvelte from "single-spa-svelte";
import App from "./App.svelte";


console.log("Home app loaded!");

const svelteLifecycles = singleSpaSvelte({
  component: App,
  domElementGetter: () => {
    let el = document.getElementById("home-app");
    if (!el) {
      el = document.createElement("div");
      el.id = "home-app";
      document.body.appendChild(el);
    }
    return el;
  },
});

export const bootstrap = svelteLifecycles.bootstrap;
export const mount = svelteLifecycles.mount;
export const unmount = svelteLifecycles.unmount;

