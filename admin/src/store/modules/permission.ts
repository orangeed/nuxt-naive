import { basisRoutes, asyncRoute } from "../../router/index";

const state = {
  routes: [],
  addRoutes: [],
};

const mutations = {
  SET_ROUTES: (state: any, routes: []) => {
    state.addRoutes = routes;
    state.routes = basisRoutes.concat(routes);
  },
};

const actions = {
  generateRoutes({ commit }) {
    return new Promise((resolve) => {
      let accessedRoutes;
      accessedRoutes = asyncRoute || [];
      commit("SET_ROUTES", accessedRoutes);
      resolve(accessedRoutes);
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
