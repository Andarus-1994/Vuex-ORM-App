<template>
  <div>
    <ul v-for="user in users" :key="user.id">
      <h1>
        {{ user.name }}
      </h1>
      <li v-for="role in user.roles" :key="role.id">{{ role.title }}</li>
    </ul>
    <h1>Roles</h1>
    <ul v-for="role in roles" :key="role.id">
      <p>{{ role.title }}</p>
      <li v-for="user in role.users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
    <button @click="changeName">Changge Name</button>
  </div>
</template>

<script>
import Role from "../classes/Roles";
import User from "../classes/User";
export default {
  name: "ManyToMany",
  mounted() {
    User.insert({
      data: [
        {
          id: 27,
          name: "Andrei",
          email: "Andrei@gmail.com",
          roles: [
            {
              id: 40,
              title: "admin",
            },
            {
              id: 42,
              title: "designer",
            },
          ],
        },
        {
          id: 34,
          name: "Arraon",
          email: "araan@gmail.com",
          roles: [
            {
              id: 42,
              title: "designer",
            },
          ],
        },
      ],
    });
  },
  computed: {
    users() {
      return User.query().with("roles").get();
    },
    roles() {
      return Role.query().with("users").get();
    },
  },
  methods: {
    changeName: function () {
      User.update({
        where: 27,
        data: { name: "Andrei Changed" },
      });
    },
  },
};
</script>

<style scoped></style>
