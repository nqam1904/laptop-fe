import { Header, Footer, SliderHeader } from 'components'
import React from 'react'
const Layout = ({ children }) => {
   return (
      <div className="layout">
         <Header />
         <main className="main-container">{children}</main>
         <Footer />

      </div>
   )
}
export default Layout
