import { Model } from "@vuex-orm/core";
import Item from "./item";
import List from "./List";
import Profile from "./Profile";
import Role from "./Roles";
import RoleUser from "./RoleUser";
import Image from "./Image";
export default class User extends Model {
  static entity = "users";

  static fields() {
    return {
      id: this.increment(),
      name: this.attr(""),
      email: this.attr(""),

      //relationships

      profile: this.hasOne(Profile, "user_id"),
      lists: this.hasMany(List, "user_id"),
      items: this.hasManyThrough(Item, List, "user_id", "list_id"),
      roles: this.belongsToMany(Role, RoleUser, "user_id", "role_id"),
      image: this.morphOne(Image, "imageable_id", "imageable_type"),
    };
  }
}
