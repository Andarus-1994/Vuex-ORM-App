<template>
  <div class="AdvancedQueries">
    <h2>Advanced Queries</h2>
    <button @click="offset = offset - 2">Previous</button>
    <button @click="offset = offset + 2">Next</button>
    <pre>{{ result }}</pre>
  </div>
</template>

<script>
import User from "../classes/User";
export default {
  name: "AdvancedQueries",
  data() {
    return {
      offset: 0,
    };
  },
  mounted() {
    User.insert({
      data: [
        {
          first_name: "Rank",
          last_name: "frabd",
          id: 99,
          age: 20,
        },
        {
          first_name: "Rank2",
          last_name: "frabd2",
          id: 100,
          age: 14,
        },
      ],
    });
  },
  computed: {
    result() {
      return User.query()
        .where((user) => {
          return user.age > 18 || user.name === "Andrei";
        })

        .orderBy("id", "asc")
        .limit(2)
        .offset(this.offset)
        .get();
    },
  },
};
</script>

<style scoped>
.AdvancedQueries {
  padding: 15px;
  background: rgb(48, 54, 56);
  color: white;
}
h2 {
  font-size: 39px;
  color: rgb(245, 245, 245);
}
</style>
