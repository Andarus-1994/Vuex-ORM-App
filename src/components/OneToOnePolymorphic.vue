<template>
  <div class="oneToOnePoly">
    <h2>Polymorphic 1-1</h2>
    <div class="user" v-for="user in users" :key="user.id">
      <h2>{{ user.name }}</h2>

      <img v-if="user.image" :src="user.image.url" />
    </div>
    <div class="posts" v-for="post in posts" :key="post.id">
      <h2>{{ post.title }}</h2>

      <img v-if="post.image" :src="post.image.url" />
    </div>
    <h3>Images</h3>

    <div v-for="(image, i) in images" :key="i">
      {{ image.imageable.constructor.entity }}
    </div>
  </div>
</template>

<script>
import User from "../classes/User";
import Image from "../classes/Image";
import Post from "../classes/Post";

export default {
  name: "Polymorphic-One",
  created() {
    User.insert({
      data: [
        {
          name: "Andrei",
          id: 1,
          image: {
            url: "https://cdn.pixabay.com/photo/2021/11/01/08/39/petit-minou-lighthouse-6759731_960_720.jpg",
          },
        },
        {
          name: "Maria",
          id: 25,
          image: {
            url: "https://cdn.pixabay.com/photo/2021/02/13/13/20/soap-bubble-6011516_960_720.jpg",
          },
        },
      ],
    });
    Post.insert({
      data: [
        {
          title: "Awesome post",
          id: 13,
          image: {
            url: "https://cdn.pixabay.com/photo/2020/04/26/18/16/floral-5096532_960_720.jpg",
          },
          tags: [
            {
              name: "heart-warming",
              id: 66,
            },
          ],
        },
      ],
    });
  },
  computed: {
    users() {
      return User.query().with("image").get();
    },
    posts() {
      return Post.query().with("image").get();
    },
    images() {
      return Image.query().with("imageable").get();
    },
  },
  mounted() {
    console.log(this.users);
  },
};
</script>

<style scoped>
.user {
  font-size: 15px;
}
.user img,
.posts img {
  width: 400px;
  height: 300px;
  object-fit: cover;
}
</style>
