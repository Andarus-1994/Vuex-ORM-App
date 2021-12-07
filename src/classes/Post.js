import { Model } from "@vuex-orm/core";
import Image from "./Image";

export default class Post extends Model {
  static entity = "posts";

  static fields() {
    return {
      id: this.increment(),
      title: this.attr(""),
      image: this.morphOne(Image, "imageable_id", "imageable_type"),
      // relationship
    };
  }
}