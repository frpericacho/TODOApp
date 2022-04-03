import { Model } from "@nozbe/watermelondb";
import { text } from "@nozbe/watermelondb/decorators";

export default class Todo_Text extends Model {
  static table = "todo_texts";
  static associations = {
    todos: { type: "belongs_to", key: "todo_id" },
  };

  @text("text") text;
}
