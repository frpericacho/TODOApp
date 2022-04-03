import { appSchema, tableSchema } from "@nozbe/watermelondb";

export default appSchema({
  version: 2,
  tables: [
    tableSchema({
      name: "todos",
      columns: [
        { name: "title", type: "string" },
        { name: "is_finish", type: "boolean" },
        { name: "date", type: "number", isOptional: true },
      ],
    }),
    tableSchema({
      name: "todo_texts",
      columns: [
        { name: "text", type: "string" },
        { name: "todo_id", type: "string" },
      ],
    }),
    tableSchema({
      name: "todo_lists",
      columns: [{ name: "todo_id", type: "string" }],
    }),
    tableSchema({
      name: "items",
      columns: [
        { name: "text", type: "string" },
        { name: "is_finish", type: "boolean" },
        { name: "todo_list_id", type: "string" },
      ],
    }),
  ],
});
