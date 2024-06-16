"use client"

// DONE REVIEWING: GITHUB COMMIT 1️⃣

import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const AlertDialogTitle = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Title>,
  ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({className, ...props}, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semi-bold", className)}
    {...props}
  />
))

AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName
export default AlertDialogTitle
