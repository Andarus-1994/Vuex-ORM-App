import { Model } from "@vuex-orm/core";
import Item from "./item";
import List from "./List";
import Profile from "./Profile";
import Role from "./Roles";
import RoleUser from "./RoleUser";
import Image from "./Image";
import Post from "./Post";
import moment from "moment";
import Comment from "./Comment";
import { Admin, Publisher, SuperAdmin } from "./UserHierarchy";

export class User extends Model {
  static entity = "users";

  get full_name() {
    return this.first_name + " " + this.last_name;
  }

  static types() {
    return {
      ADMIN: Admin,
      PUBLISHER: Publisher,
      SUPER_ADMIN: SuperAdmin,
    };
  }

  static mutators() {
    return {
      last_name(value) {
        return value.toUpperCase();
      },

      date_born(value) {
        return moment(value).format("MM/DD/YYYY");
      },
    };
  }

  post() {
    console.log("Make a post");
  }

  login() {
    console.log("user loggin");
  }

  static fields() {
    return {
      id: this.increment(),
      type: this.attr("USER"),
      name: this.attr(""),
      email: this.attr(""),
      first_name: this.attr(""),
      last_name: this.attr(""),
      date_born: this.attr(null),
      age: this.attr(null),

      //relationships
      posts: this.hasMany(Post, "user_id"),
      comments: this.hasMany(Comment, "user_id"),
      profile: this.hasOne(Profile, "user_id"),
      lists: this.hasMany(List, "user_id"),
      items: this.hasManyThrough(Item, List, "user_id", "list_id"),
      roles: this.belongsToMany(Role, RoleUser, "user_id", "role_id"),
      image: this.morphOne(Image, "imageable_id", "imageable_type"),
    };
  }
}
