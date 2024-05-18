// DONE REVIEWING: GITHUB COMMIT
import {PropsWithChildren} from "react"

const Layout = function Layout({children}: PropsWithChildren) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}

export default Layout
