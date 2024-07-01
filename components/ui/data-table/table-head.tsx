"use client"

// DONE REVIEWING: GITHUB COMMIT

import {HTMLAttributes, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const TableHead = forwardRef<HTMLTableCellElement, HTMLAttributes<HTMLTableCellElement>>(
  ({className, ...props}, ref) => (
    <th ref={ref} className={cn("shc-table-head-base", className)} {...props} />
  )
)

TableHead.displayName = "TableHead"
export default TableHead
