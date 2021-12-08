<template>
  <div class="AccessorsAndMutators">
    <h2>Accessors + Mutators</h2>
    <p>{{ user.full_name }}</p>
    <p>{{ user.date_born }}</p>
  </div>
</template>

<script>
import { User } from "../classes/UserHierarchy";
export default {
  name: "AccesorsMutators",
  mounted() {
    User.insert({
      data: {
        id: 30,
        date_born: "1991-04-27T14:00:00.000Z",
        first_name: "Lana",
        email: "Lana@yahoo.com",
        last_name: "Trevis",
      },
    });
  },
  computed: {
    user() {
      return User.find(30);
    },
  },
};
</script>

<style scoped>
.AccessorsAndMutators {
  padding: 15px;
  background: rgb(169, 206, 194);
}
h2 {
  font-size: 39px;
  color: rgb(168, 28, 18);
}
</style>
