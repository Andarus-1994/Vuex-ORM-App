import Vuex from "vuex";
import Vue from "vue";
import VuexORM from "@vuex-orm/core";
import Item from "../classes/item";
import Profile from "../classes/Profile";
import User from "../classes/User";
import List from "../classes/List";
// Load Vuex
Vue.use(Vuex);

const database = new VuexORM.Database();

database.register(Item);
database.register(Profile);
database.register(User);
database.register(List);
// Create store jhere

export default new Vuex.Store({
  plugins: [VuexORM.install(database)],
});
