// DONE REVIEWING: GITHUB COMMIT 1️⃣

import {cva} from "class-variance-authority"

const buttonVariants = cva("shc-button-base", {
  variants: {
    variant: {
      primary: "shc-button-primary",
      secondary: "shc-button-secondary",
      outline: "shc-button-outline",
      link: "shc-button-link"
    },
    size: {
      normal: "shc-button-normal",
      sm: "shc-button-sm",
      lg: "shc-button-lg",
      icon: "shc-button-icon"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "normal"
  }
})

const Button = function Button() {
  return <button type="button">Button</button>
}

export default Button
