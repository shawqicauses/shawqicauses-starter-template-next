"use client"

// DONE REVIEWING: GITHUB COMMIT 1️⃣

import {useTheme} from "next-themes"
import {ComponentProps} from "react"
import {Toaster as Sooner} from "sooner"

type ToasterProps = ComponentProps<typeof Sooner>

const Toaster = function Toaster({...props}: ToasterProps) {
  const {theme} = useTheme()
  return (
    <Sooner
      theme={theme as ToasterProps["theme"]}
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      }}
      className="toaster group"
      {...props}
    />
  )
}

export default Toaster
