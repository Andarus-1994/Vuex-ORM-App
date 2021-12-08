import { User } from "./UserHierarchy";

export class Publisher extends User {
  static entity = "publishers";

  static baseEntity = "users";

  verifyPost() {
    console.log("Verify the post");
  }

  static fields() {
    return {
      ...super.fields(),

      // relationships
    };
  }
}
