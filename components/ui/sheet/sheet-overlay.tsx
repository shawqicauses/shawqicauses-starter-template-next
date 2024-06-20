"use client"

// DONE REVIEWING: GITHUB COMMIT 2️⃣

import * as SheetPrimitive from "@radix-ui/react-dialog"
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const SheetOverlay = forwardRef<
  ElementRef<typeof SheetPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({className, ...props}, ref) => (
  <SheetPrimitive.Overlay
    ref={ref}
    className={cn("shc-alert-dialog-overlay-base", className)}
    {...props}
  />
))

SheetOverlay.displayName = SheetPrimitive.Overlay.displayName
export default SheetOverlay
