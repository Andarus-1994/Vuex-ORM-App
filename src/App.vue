<template>
  <div id="app">
    <div v-for="user in users" :key="user.id">
      <h3>{{ user.name }}</h3>
      <p>{{ user.profile.life_goal }}</p>
      <h4>List here:</h4>
      <ul>
        <li v-for="list in user.lists" :key="list.id">
          {{ list.title }}
          <ul>
            <li v-for="item in list.items" :key="item.id">
              {{ item.body }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <h3>Vuex-App</h3>
    <input v-model="form.body" />
    <button @click="addItem">Add Item</button>
    <li v-for="item in items" :key="item.$id">
      {{ item.body }}
    </li>
  </div>
</template>

<script>
import Item from "./classes/item";
import User from "./classes/User";

export default {
  name: "App",
  data() {
    return {
      form: { body: "" },
    };
  },
  components: {},
  computed: {
    items() {
      return Item.all();
    },

    users() {
      return User.query().with("profile").with("lists.items").get();
    },
  },
  methods: {
    addItem: function () {
      Item.insert({ data: this.form });
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
              id: 500,
              title: "shopping",
              items: [
                {
                  id: 5232,
                  body: "Bananas",
                },
                {
                  id: 4788,
                  body: "Coconut",
                },
              ],
            },
            {
              id: 422,
              title: "Life friends",
              items: [
                {
                  id: 344,
                  body: "Alex",
                },
                {
                  id: 256,
                  body: "Daniel",
                },
              ],
            },
            {
              id: 234,
              title: "Hacking list",
              items: [
                {
                  id: 344,
                  body: "Google",
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
          lists: [
            {
              id: 423,
              title: "shopping",
            },
          ],
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
</style>
