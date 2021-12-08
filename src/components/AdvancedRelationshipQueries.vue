<template>
  <div class="AdvancedRelationshipQueries">
    <h2>Advanced Relationship Queries</h2>
    <h3>Posts</h3>
    <pre>{{ posts }}</pre>
    <h3>Result</h3>
    <pre>{{ results }}</pre>
  </div>
</template>

<script>
import insertUsers from "../insertUsers";
import { User } from "../classes/UserHierarchy";
import Post from "../classes/Post";
export default {
  name: "RelationshipQueriesAdv",
  mounted() {
    console.log("test", this.results);
  },
  created() {
    insertUsers();
  },
  computed: {
    results() {
      return User.query()
        .with("posts", (query) => query.where("published", true))
        .get();
      // .withAllRecursive && .withAll
      // .with("posts.*")
    },
    posts() {
      return Post.query()
        .with("comments")
        .has("comments", ">=", 1)

        .get();
    },
  },
};
</script>

<style scoped>
.AdvancedRelationshipQueries {
  padding: 15px;
  background: rgb(197, 197, 197);
  color: black;
}
h2 {
  font-size: 45px;
  font-style: italic;
  color: rgba(0, 0, 0, 0.808);
}
</style>
