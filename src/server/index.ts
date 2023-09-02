import Database from "better-sqlite3"
import { drizzle } from "drizzle-orm/better-sqlite3"
import { migrate } from "drizzle-orm/better-sqlite3/migrator"
import {router , pubPro} from "./trpc"
import { todo } from "@/db/schema"
import {z} from "zod"
const sqlite = new Database("sqlite.db")
const db = drizzle(sqlite)
migrate(db , {migrationsFolder: "drizzle"})
export const appRouter = router({
    getTodo: pubPro.query(async () => {
       return await db.select().from(todo).all()
    }),
    addTodo: pubPro.input(z.string()).mutation(async (opts) => {
        await db.insert(todo).values({content: opts.input, done: 0}).run()
        return true
    })
})
export type AppRouter = typeof appRouter