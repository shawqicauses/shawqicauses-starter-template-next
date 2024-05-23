// DONE REVIEWING: GITHUB COMMIT
import {publicProcedure, router} from "./trpc"

const appRouter = router({
  userList: publicProcedure.query(async () => {
    const users = [{id: 0, username: "@shawqicauses"}]
    return users
  })
})

export type AppRouter = typeof appRouter
