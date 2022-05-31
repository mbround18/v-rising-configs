/**
 * @typedef Route
 * @property {string} key
 * @property {boolean} loaded
 * @property {*} component
 * @property {undefined | () => Promise<ImportMeta>} onLoad
 */

export default class Router {
  /**
   * @type {Route[]}
   */
  routes = [];

  /**
   * @param {string} key
   * @returns {Route | undefined}
   */
  get(key) {
    return this.routes[this.routes.findIndex((r) => r.key === key)];
  }

  /**
   *
   * @param {string} key
   * @param {undefined | () => Promise<ImportMeta>} onLoad
   */
  add(key, onLoad) {
    this.routes.push({
      key,
      loaded: false,
      onLoad: () => {
        document
          .querySelectorAll(`[data-nav-id]:not([data-nav-id="${key}"]`)
          .forEach((e) => (e.style.display = "none"));
        document
          .querySelectorAll(`[data-nav-id="${key}"]`)
          .forEach((e) => (e.style.display = "block"));

        if (!this.get(key).loaded) {
          onLoad?.()?.then?.((e) => {
            const route = this.get(key);
            route.loaded = true;
            route.component = e;
            route?.component?.init?.();
          });
        } else {
          this.get(key)?.component?.init?.();
        }
      },
    });
  }

  switch(key) {
    const route = this.get(key);
    if (!route) {
      throw new Error(`No route found for ${key}`);
    }
    route?.onLoad();
  }
}
