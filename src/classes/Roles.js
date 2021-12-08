import { Model } from "@vuex-orm/core";
import RoleUser from "./RoleUser";
import { User } from "./UserHierarchy";

export default class Role extends Model {
  static entity = "roles";

  static fields() {
    return {
      id: this.increment(),
      title: this.attr(""),

      //relationships

      users: this.belongsToMany(User, RoleUser, "role_id", "user_id"),
    };
  }
}
