// DONE REVIEWING: GITHUB COMMIT
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const AlertDialogOverlay = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({className, ...props}, ref) => (
  <AlertDialogPrimitive.Overlay
    ref={ref}
    className={cn(
      `bg-background/80 fixed inset-0 z-50 data-[${["state", "open"].join("=")}]:animate-in data-[${["state", "closed"].join("=")}]:animate-out data-[${["state", "closed"].join("=")}]:fade-out-0 data-[${["state", "open"].join("=")}]:fade-in-0`,
      className
    )}
    {...props}
  />
))

AlertDialogOverlay.displayName = "AlertDialogOverlay"

export default AlertDialogOverlay
