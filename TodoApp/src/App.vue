<template>
  <Header v-on:addTodo="addTodoHandler"></Header>
  <Main></Main>
  <Footer></Footer>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Main from "./components/Main.vue";
import { useStore } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
  },
  setup() {
    const store = useStore();

    const addTodoHandler = (value) => {
      // vuex store 저장
      store.dispatch("addTodo", value);
    };

    return { addTodoHandler };
  },
};
</script>

<style scoped></style>
