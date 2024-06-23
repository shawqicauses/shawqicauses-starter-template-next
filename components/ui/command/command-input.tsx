// DONE REVIEWING: GITHUB COMMIT
import {Command as CommandPrimitive} from "cmdk"
import {Search} from "lucide-react"
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const CommandInput = forwardRef<
  ElementRef<typeof CommandPrimitive.Input>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({className, ...props}, ref) => (
  <div className="flex items-center border-b px-3">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input ref={ref} className={cn("shc-command-input", className)} {...props} />
  </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName
export default CommandInput
