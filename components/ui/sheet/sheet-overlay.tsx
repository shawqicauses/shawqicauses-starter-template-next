// DONE REVIEWING: GITHUB COMMIT
import * as SheetPrimitive from "@radix-ui/react-dialog"
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const SheetOverly = forwardRef<
  ElementRef<typeof SheetPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({className, ...props}, ref) => (
  <SheetPrimitive.Overlay
    ref={ref}
    className={cn("shc-alert-dialog-overlay-base", className)}
    {...props}
  />
))

SheetOverly.displayName = SheetPrimitive.Overlay.displayName
export default SheetOverly
