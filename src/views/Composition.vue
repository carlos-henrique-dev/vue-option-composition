<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h3>You have {{ todosCount }} Todos!</h3>
    <div>
      <input
        v-model="data.newTodoName"
        @keyup.enter="addTodo"
        type="text"
        placeholder="Add a Todo"
      />
    </div>
    <div>
      <ul>
        <li v-for="(todo, index) in data.todos" :key="todo.id">
          <span>{{ todo.name }}</span
          ><button @click="deleteTodo(index)">X</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch, reactive } from "vue";
export default {
  setup() {
    let data = reactive({
      newTodoName: "",
      todos: [
        {
          id: 1,
          name: "One",
        },
        {
          id: 2,
          name: "Two",
        },
      ],
    });

    let todosCount = computed(() => data.todos.length);
    const swearwords = ["fart", "butt hair", "willy"];

    function addTodo() {
      let newTodo = {
        id: Date.now(),
        name: data.newTodoName,
      };
      data.todos.push(newTodo);
      data.newTodoName = "";
    }

    function deleteTodo(index) {
      data.todos.splice(index, 1);
    }

    watch(data, (newValue) => {
      if (swearwords.includes(newValue.newTodoName.toLowerCase())) {
        data.newTodoName = "";
        alert("You must never say " + newValue + "!!");
      }
    });

    return { todosCount, addTodo, deleteTodo, data };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  width: 200px;
  margin: 20px auto 0;
}

li {
  border: 1px solid;
  display: flex;
  margin-bottom: 10px;
}

li span {
  flex-grow: 1;
}
</style>