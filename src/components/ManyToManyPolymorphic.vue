<template>
  <div class="ManyToManyPolymorphic">
    <h2>Many to many</h2>
    <div v-for="video in videos" :key="video.id">
      {{ video.url }}
      <ul>
        <li v-for="tag in video.tags" :key="tag.id">
          {{ tag.name }}
        </li>
      </ul>
    </div>
    <div v-for="post in posts" :key="post.id">
      {{ post.title }}
      <ul>
        <li v-for="tag in post.tags" :key="tag.id">
          {{ tag.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Post from "../classes/Post";
import Video from "../classes/Video";
export default {
  name: "ManyToManyPolymorphic",
  mounted() {
    Video.insert({
      data: [
        {
          id: 23,
          url: "https://www.youtube.com/224",
          tags: [
            {
              name: "funny",
              id: 49,
            },
            {
              name: "cringy",
              id: 52,
            },
            {
              name: "sad",
              id: 50,
            },
          ],
        },
      ],
    });
  },
  computed: {
    videos() {
      return Video.query().with("tags").get();
    },
    posts() {
      return Post.query().with("tags").get();
    },
  },
};
</script>

<style scoped>
.ManyToManyPolymorphic {
  padding: 30px;
  background: rgb(221, 221, 221);
  min-height: 40vh;
}
h2 {
  color: rgb(95, 35, 87);
  font-size: 45px;
  margin-bottom: 15px;
}
</style>
