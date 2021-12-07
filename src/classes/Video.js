import { Model } from "@vuex-orm/core";
import Comment from "./Comment";
import Tag from "./Tag";
import Taggables from "./Taggable";

export default class Video extends Model {
  static entity = "videos";

  static fields() {
    return {
      id: this.increment(),
      url: this.attr(""),

      // relationship

      comments: this.morphMany(Comment, "commentable_id", "commentable_type"),
      tags: this.morphToMany(
        Tag,
        Taggables,
        "tag_id",
        "taggable_id",
        "taggable_type"
      ),
    };
  }
}
