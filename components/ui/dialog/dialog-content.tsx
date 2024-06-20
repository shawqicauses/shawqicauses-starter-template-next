"use client"

// DONE REVIEWING: GITHUB COMMIT

import * as DialogPrimitive from "@radix-ui/react-dialog"
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const DialogContent = forwardRef<
  ElementRef<typeof DialogPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({className, ...props}, ref) => (
  <DialogPrimitive.Content
    ref={ref}
    className={cn("shc-dialog-content-base", className)}
    {...props}
  />
))

DialogContent.displayName = DialogPrimitive.Content.displayName
export default DialogContent
