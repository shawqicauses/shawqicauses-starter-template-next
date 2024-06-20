// DONE REVIEWING: GITHUB COMMIT
import {cva} from "class-variance-authority"

export const sheetVariants = cva("shc-sheet-base", {
  variants: {
    side: {
      top: "shc-sheet-top",
      right: "shc-sheet-right",
      bottom: "shc-sheet-bottom",
      left: "shc-sheet-left"
    }
  },
  defaultVariants: {
    side: "right"
  }
})

export default {}
