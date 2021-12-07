<template>
  <div class="list">
    <h2>{{ list.title }}</h2>
    <input v-model="form.body" />
    <button @click="addItem">Add Item</button>
    <ul>
      <li v-for="item in filledList.items" :key="item.id">
        {{ item.body }}
      </li>
    </ul>
  </div>
</template>

<script>
import Item from "../classes/item";
import List from "../classes/List";
export default {
  name: "Lists",
  data() {
    return {
      form: {
        body: "",
        list_id: this.list.id,
      },
    };
  },
  computed: {
    filledList() {
      return List.query().with("items").find(this.list.id);
    },
  },
  props: {
    list: {
      required: true,
      type: List,
    },
  },
  methods: {
    addItem: function () {
      Item.insert({ data: this.form });
    },
  },
};
</script>

<style scoped>
h2 {
  color: rgb(56, 56, 114);
  font-size: 33px;
}
</style>
