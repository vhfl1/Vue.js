/**
 * Vuex 전역 스토어 설정
 *
 */
import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    user: null,
  },
  mutations: {
    SET_USER: function (state, data) {
      state.user = data;
    },
  },
  actions: {
    setUser: function (context, data) {
      context.commit("SET_USER", data);
    },
    login: function (context, user) {},
  },
  getters: {
    getUser: function (state) {
      return state.user;
    },
  },
});

//store 내보내기 -> main.js 등록 설정
export default store;
