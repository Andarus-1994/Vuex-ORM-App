<template>
  <div class="SingleTable">
    <h2>Single table inheritance</h2>
    <div class="users" v-for="user in users" :key="user.id">
      <h4>{{ user.first_name }}</h4>
    </div>
    <h2>Publishers</h2>
    <div class="users" v-for="publisher in publishers" :key="publisher.id">
      <h4>{{ publisher.first_name }}</h4>
    </div>
    <h2>Admins</h2>
    <div class="users" v-for="admin in admins" :key="admin.id">
      <h4>{{ admin.first_name }}</h4>
    </div>
    <h2>Super Admins</h2>
    <div
      class="users"
      v-for="super_admin in super_admins"
      :key="super_admin.id"
    >
      <h4>{{ super_admin.first_name }}</h4>
    </div>
  </div>
</template>

<script>
//import Publisher from "../classes/Publisher";
import { Admin, Publisher, SuperAdmin, User } from "../classes/UserHierarchy";
export default {
  name: "SingleTable",
  mounted() {
    User.insert({
      data: [
        {
          type: "PUBLISHER",
          id: 1,
          first_name: "Andarus",
        },
        {
          type: "ADMIN",
          id: 66,
          first_name: "Valerius",
        },
        {
          type: "SUPER_ADMIN",
          id: 67,
          first_name: "Herius",
        },
      ],
    });
    User.find(67).deleteServer();
  },
  computed: {
    users() {
      return User.all();
    },
    publishers() {
      return Publisher.all();
    },
    admins() {
      return Admin.all();
    },
    super_admins() {
      return SuperAdmin.all();
    },
  },
};
</script>

<style>
.SingleTable {
  padding: 10px;
  background: rosybrown;
  color: white;
}
h2 {
  font-style: 44px;
}
</style>
