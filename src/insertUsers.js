import { User } from "./classes/UserHierarchy";

export default () => {
  User.insertOrUpdate({
    data: {
      id: 64,
      first_name: "Ioana",
      age: 24,
      posts: [
        {
          published: true,
          id: 91,
          title: "Vue is lovely",
          tags: [
            {
              id: 4,
              name: "vue",
            },
            {
              id: 6,
              name: "tutorials",
            },
          ],
          comments: [
            {
              user_id: 3,
              id: 1,

              body: "Cool post man!",
            },
            {
              user_id: 6,
              id: 2,

              body: "I love this post!",
            },
          ],
        },
        {
          id: 44,
          title: "Piano teachings",
          tags: [
            {
              id: 3,
              name: "piano",
              comments: [
                {
                  user_id: 6,
                  id: 49,
                  body: "I'd like to learn more...",
                },
              ],
            },
          ],
        },
        {
          id: 30,
          title: "Boring post",
        },
      ],
    },
  });

  User.insertOrUpdate({
    data: {
      id: 2,
      first_name: "Daniel",
      age: "44",
      posts: [
        {
          id: 6,
          title: "Nutristion stuff",
          published: true,
          tags: [
            {
              id: 6,
              title: "tutorials",
            },
          ],
          comments: [
            {
              user_id: 2,
              id: 22,
              body: "Love healthy diets",
            },
          ],
        },
      ],
    },
  });

  User.insertOrUpdate({
    data: {
      id: 4,
      first_name: "Price",
      age: 14,
    },
  });
};
