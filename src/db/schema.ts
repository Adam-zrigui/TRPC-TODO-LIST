import { sqliteTable , integer , text} from "drizzle-orm/sqlite-core";

export const todo = sqliteTable("todo", {
    id: integer("id").primaryKey(),
    content: text("content"),
    done: integer("done")
})