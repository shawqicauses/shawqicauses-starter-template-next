// DONE REVIEWING: GITHUB COMMIT 1️⃣
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"
import {AlertDialogPortal} from "."
import {cn} from "../../../lib/utils"
import AlertDialogOverlay from "./alert-dialog-overlay"

const AlertDialogContent = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({className, ...props}, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        `fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border bg-background p-6 shadow-lg duration-200 data-[${["state", "open"].join("=")}]:animate-in data-[${["state", "closed"].join("=")}]:animate-out data-[${["state", "closed"].join("=")}]:fade-out-0 data-[${["state", "open"].join("=")}]:fade-in-0 data-[${["state", "closed"].join("=")}]:zoom-out-95 data-[${["state", "open"].join("=")}]:zoom-in-95 data-[${["state", "closed"].join("=")}]:slide-out-to-left-1/2 data-[${["state", "closed"].join("=")}]:slide-out-to-top-[48%] data-[${["state", "open"].join("=")}]:slide-in-from-left-1/2 data-[${["state", "open"].join("=")}]:slide-in-from-top-[48%] sm:rounded-lg`,
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
))

AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName
export default AlertDialogContent
