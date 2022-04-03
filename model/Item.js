import { Model } from "@nozbe/watermelondb";
import { field, text } from "@nozbe/watermelondb/decorators";

export default class Item extends Model {
  static table = "items";
  static associations = {
    todos: { type: "belongs_to", key: "todo_list_id" },
  };

  @text("text") text;
  @field("is_finish") isFinish;
}
