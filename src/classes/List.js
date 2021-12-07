import { Model } from "@vuex-orm/core";
import Item from "./item";
import User from "./User";

export default class List extends Model {
  static entity = "lists";

  static fields() {
    return {
      id: this.attr(null),
      title: this.attr(""),
      user_id: this.attr(null),

      // relationships

      user: this.belongsTo(User, "user_id"),
      items: this.hasMany(Item, "list_id"),
    };
  }
}
