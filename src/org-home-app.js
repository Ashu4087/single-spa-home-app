// import singleSpaSvelte from "single-spa-svelte";
// import App from "./App.svelte";

// const svelteLifecycles = singleSpaSvelte({
//   component: App,
// });

// export const { bootstrap, mount, unmount } = svelteLifecycles;

import singleSpaSvelte from "single-spa-svelte";
import App from "./App.svelte";

console.log("loads home mfe");

const svelteLifecycles = singleSpaSvelte({
  component: App,
  domElementGetter: () => document.getElementById("home-app"), // Ensure a unique DOM element
});

export const bootstrap = svelteLifecycles.bootstrap;
export const mount = svelteLifecycles.mount;
export const unmount = svelteLifecycles.unmount;
