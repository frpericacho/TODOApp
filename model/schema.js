import { appSchema, tableSchema } from "@nozbe/watermelondb";

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: "todo_texts",
      columns: [
        { name: "title", type: "string" },
        { name: "text", type: "string" },
        { name: "is_finish", type: "boolean" },
      ],
    }),
    tableSchema({
        name: "todo_lists",
        columns: [
          { name: "title", type: "string" },
          { name: "is_finish", type: "boolean" },
        ],
      }),
      tableSchema({
        name: "items",
        columns: [
          { name: "text", type: "string" },
          { name: "is_finish", type: "boolean" },
          { name: "todo_list_id", type: "string" },
        ],
      }),
      tableSchema({
        name: "events",
        columns: [
          { name: "created_at", type: "number" },
          { name: "is_finish", type: "boolean" },
          { name: "todo_list_id", type: "string", isOptional: true },
          { name: "todo_text_id", type: "string", isOptional: true },
        ],
      }),
  ],
});
