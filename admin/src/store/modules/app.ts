import { getStorge, setStorge } from "../../utils/storage";

const state = {
  sidebar: {
    opened: getStorge("sidebarStatus") ? !!+getStorge("sidebarStatus") : true,
    withoutAnimation: false,
  },
  device: "desktop",
  size: getStorge("size") || "medium",
  mode: "light",
};

const mutations = {
  TOGGLE_SIDEBAR: (state: any) => {
    state.sidebar.opened = !state.sidebar.opened;
    state.sidebar.withoutAnimation = false;
    if (state.sidebar.opened) {
      setStorge("sidebarStatus", 1);
    } else {
      setStorge("sidebarStatus", 0);
    }
  },
  CLOSE_SIDEBAR: (state: any, withoutAnimation: any) => {
    setStorge("sidebarStatus", 0);
    state.sidebar.opened = false;
    state.sidebar.withoutAnimation = withoutAnimation;
  },
  TOGGLE_DEVICE: (state: any, device: any) => {
    state.device = device;
  },
  SET_SIZE: (state: any, size: any) => {
    state.size = size;
    setStorge("size", size);
  },
  CHANGE_MODE: (state: any, mode: string) => {
    state.mode = mode;
    setStorge("mode", mode);
  },
};

const actions = {
  toggleSideBar({ commit }) {
    commit("TOGGLE_SIDEBAR");
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit("CLOSE_SIDEBAR", withoutAnimation);
  },
  toggleDevice({ commit }, device) {
    commit("TOGGLE_DEVICE", device);
  },
  setSize({ commit }, size) {
    commit("SET_SIZE", size);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
