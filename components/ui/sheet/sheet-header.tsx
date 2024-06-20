"use client"

// DONE REVIEWING: GITHUB COMMIT 1️⃣

import {HTMLAttributes} from "react"
import {cn} from "../../../lib/utils"

const SheetHeader = function SheetHeader({className, ...props}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("shc-sheet-header-base", className)} {...props} />
}

SheetHeader.displayName = "SheetHeader"
export default SheetHeader
