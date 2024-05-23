// DONE REVIEWING: GITHUB COMMIT 1️⃣
import {createHTTPServer} from "@trpc/server/adapters/standalone"
import {z} from "zod"
import {publicProcedure, router} from "./trpc"

const appRouter = router({
  userList: publicProcedure.query(async () => {
    const users = [{id: 0, username: "@shawqicauses"}]
    return users
  }),
  userById: publicProcedure.input(z.number()).query(async (opts) => {
    const {input} = opts
    // DB USER FETCHING HERE
    return {user: {id: input, username: "@shawqicauses"}}
  }),
  userCreate: publicProcedure
    .input(z.object({id: z.number(), name: z.string()}))
    .mutation(async (opts) => {
      const {input} = opts
      // DB USER CREATION HERE
      return {user: {id: input.id, name: input.name}}
    })
})

const server = createHTTPServer({
  router: appRouter
})

server.listen(3000)

export type AppRouter = typeof appRouter
