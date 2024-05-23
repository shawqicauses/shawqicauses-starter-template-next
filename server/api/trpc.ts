// DONE REVIEWING: GITHUB COMMIT 1️⃣
import {initTRPC} from "@trpc/server"

const t = initTRPC.create()

export const {router} = t
export const {procedure} = t
