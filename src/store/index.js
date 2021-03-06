import Vuex from "vuex";
import Vue from "vue";
import VuexORM from "@vuex-orm/core";
import Item from "../classes/item";
import Profile from "../classes/Profile";
import List from "../classes/List";
import RoleUser from "../classes/RoleUser";
import Role from "../classes/Roles";
import Post from "../classes/Post";
import Image from "../classes/Image";
import Video from "../classes/Video";
import Comment from "../classes/Comment";
import Tag from "../classes/Tag";
import Taggables from "../classes/Taggable";
import { User, Publisher, Admin, SuperAdmin } from "../classes/UserHierarchy";
// Load Vuex
Vue.use(Vuex);

const database = new VuexORM.Database();

database.register(Item);
database.register(Profile);
database.register(User);
database.register(List);
database.register(RoleUser);
database.register(Role);
database.register(Image);
database.register(Post);
database.register(Video);
database.register(Comment);
database.register(Tag);
database.register(Taggables);
database.register(Publisher);
database.register(Admin);
database.register(SuperAdmin);
// Create store jhere

export default new Vuex.Store({
  plugins: [VuexORM.install(database)],
});
