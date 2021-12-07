<template>
  <div id="app">
    <div class="leftSide">
      <div v-for="user in users" :key="user.id">
        <h3>{{ user.name }}</h3>
        <p>{{ user.profile.life_goal }}</p>
        <List v-for="list in user.lists" :key="list.id" :list="list" />
        <input v-model="form.title" />
        <button v-on:click="addList(user.id)">Add List for user</button>
      </div>
    </div>
    <div class="rightSide">
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.body }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import List from "./classes/List";
import User from "./classes/User";
import ListComponent from "./components/List.vue";
export default {
  name: "App",
  data() {
    return {
      form: { title: "", user_id: null },
    };
  },
  components: {
    List: ListComponent,
  },
  computed: {
    users() {
      return User.query().with("profile").with("lists.items").get();
    },

    items() {
      return User.query().with("items").find(27).items;
    },
  },
  methods: {
    addList: function (id) {
      this.form.user_id = id;
      List.insert({ data: this.form });
    },
  },
  mounted() {
    console.log(this.users);
  },
  beforeMount() {
    User.insert({
      data: [
        {
          id: 27,
          name: "Andrei",
          email: "Andrei@gmail.com",
          profile: {
            id: 23,
            bio: "Web Developer",
            life_goal: "Testing this life goal",
          },
          lists: [
            {
              title: "gym",
              id: 44,
              items: [
                {
                  id: 89,
                  body: "30kg weight",
                },
                {
                  id: 829,
                  body: "50kg weight",
                },
              ],
            },
            {
              title: "Shopping",
              id: 444,
              items: [
                {
                  body: "orange",
                  id: 99,
                },
              ],
            },
          ],
        },
        {
          id: 29,
          name: "Alex",
          email: "alex@gmail.com",
          profile: {
            id: 43,
            bio: "Web Developer 22",
            life_goal: "Testing this life goal 2",
          },
        },
      ],
    });
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  background: #f0f0f0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0 50px;
  color: #353946;
  margin-top: 60px;
}
.leftSide {
  float: left;
  width: 50%;
}
.rightSide {
  float: right;
  width: 50%;
}
</style>
