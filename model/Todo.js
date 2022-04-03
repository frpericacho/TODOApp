import { Model } from "@nozbe/watermelondb";
import { date, field, text } from "@nozbe/watermelondb/decorators";

class Todo extends Model {
  static table = "todos";
  static associations = {
    todos_lists: { type: "has_many", foreignKey: "todo_id" },
    todo_texts: { type: "has_many", foreignKey: "todo_id" },
  };

  @text("title") title;
  @field("is_finish") isFinish;
  @date("date") date;
}

export default Todo;
