import { Model } from "@vuex-orm/core";

export default class Tag extends Model {
  static entity = "tags";

  static fields() {
    return {
      id: this.increment(),
      name: this.attr(null),
    };
  }
}
