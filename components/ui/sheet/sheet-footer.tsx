"use client"

// DONE REVIEWING: GITHUB COMMIT 2️⃣

import {HTMLAttributes} from "react"
import {cn} from "../../../lib/utils"

const SheetFooter = function SheetFooter({className, ...props}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("shc-dialog-footer-base", className)} {...props} />
}

SheetFooter.displayName = "SheetFooter"
export default SheetFooter
