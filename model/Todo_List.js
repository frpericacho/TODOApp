import { Model } from "@nozbe/watermelondb";

export default class Todo_List extends Model {
  static table = "todo_lists";
  static associations = {
    todos: { type: "belongs_to", key: "todo_id" },
    items: { type: "has_many", foreignKey: "todo_list_id" },
  };
}
