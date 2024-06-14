// DONE REVIEWING: GITHUB COMMIT 1️⃣
import * as SwitchPrimitives from "@radix-ui/react-switch"
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"
import {cn} from "../../lib/utils"

const Switch = forwardRef<
  ElementRef<typeof SwitchPrimitives.Root>,
  ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({className, ...props}, ref) => (
  <SwitchPrimitives.Root ref={ref} className={cn("shc-switch-base peer", className)} {...props}>
    <SwitchPrimitives.Thumb className={cn("shc-switch-thumb-base")} />
  </SwitchPrimitives.Root>
))

Switch.displayName = SwitchPrimitives.Root.displayName
export default Switch
