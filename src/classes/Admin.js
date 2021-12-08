import { User } from "./UserHierarchy";

export class Admin extends User {
  static entity = "admins";

  static baseEntity = "users";

  deleteAccount() {
    console.log("deleting account");
  }

  static fields() {
    return {
      ...super.fields(),

      // relationships
    };
  }
}
