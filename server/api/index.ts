// DONE REVIEWING: GITHUB COMMIT 2️⃣
import userRouter from "./routers/user"
import {router} from "./trpc"

export const appRouter = router({
  userRouter
})

export type AppRouter = typeof appRouter
