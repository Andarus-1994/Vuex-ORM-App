import { Model } from "@vuex-orm/core";
import List from "./List";

export default class Item extends Model {
  static entity = "items";

  static fields() {
    return {
      id: this.increment(null),
      body: this.attr(""),
      list_id: this.attr(null),
      // relationship

      list: this.belongsTo(List, "list_id"),
    };
  }
}
