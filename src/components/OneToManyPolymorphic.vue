<template>
  <div class="OneToManyPolymorphic">
    <h2>One to many</h2>
    <div>
      <h2>Videos #</h2>
      <div v-for="video in videos" :key="video.id">
        {{ video.url }}
        <ul>
          <li v-for="comment in video.comments" :key="comment.id">
            {{ comment.body }}
          </li>
        </ul>
      </div>
    </div>
    <div>
      <h2>Posts #</h2>
      <div v-for="post in posts" :key="post.id">
        {{ post.title }}
        <ul>
          <li v-for="comment in post.comments" :key="comment.id">
            {{ comment.body }}
          </li>
        </ul>
      </div>
    </div>

    <div>
      <h2>Comments</h2>
      <div v-for="comment in comments" :key="comment.id">
        {{ comment.body }} -
        <strong>{{ comment.commentable.constructor.entity }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
import Comment from "../classes/Comment";
import Post from "../classes/Post";
import Video from "../classes/Video";
export default {
  name: "OneToManyPolymorphic",
  computed: {
    videos() {
      return Video.query().with("comments").get();
    },
    posts() {
      return Post.query().with("comments").get();
    },
    comments() {
      return Comment.query().with("commentable").get();
    },
  },
  mounted() {
    Video.insert({
      data: [
        {
          id: 14,
          url: "https://www.youtube.com/watch?v=LTGKgMJ_xyk&t=67s",
          comments: [
            {
              id: 20,
              body: "This video is nice.",
            },
            {
              id: 33,
              body: "Love this video!",
            },
          ],
        },
        {
          id: 17,
          url: "https://www.youtube.com/",
          comments: [
            {
              id: 27,
              body: "Awesome.",
            },
            {
              id: 37,
              body: "Takes time I guess!",
            },
          ],
        },
      ],
    });
    Post.insert({
      data: [
        {
          id: 9,
          title: "Title of the post",
          comments: [
            {
              id: 22,
              body: "I love them",
            },
            {
              id: 35,
              body: "Can't belive this !",
            },
          ],
          tags: [
            {
              name: "funny",
              id: 49,
            },
            {
              name: "WoW!",
              id: 61,
            },
          ],
        },
      ],
    });
  },
};
</script>

<style scoped>
.OneToManyPolymorphic {
  min-height: 30vh;
}
h2 {
  color: green;
  margin: 15px 0;
  font-size: 40px;
}
</style>
