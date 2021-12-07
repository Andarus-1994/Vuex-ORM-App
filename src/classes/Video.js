import { Model } from "@vuex-orm/core";
import Comment from "./Comment";

export default class Video extends Model {
  static entity = "videos";

  static fields() {
    return {
      id: this.increment(),
      url: this.attr(""),

      // relationship

      comments: this.morphMany(Comment, "commentable_id", "commentable_type"),
    };
  }
}
