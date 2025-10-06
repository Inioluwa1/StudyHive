import React from 'react'
import Navigation from "@/components/Navigation"
import "@/assets/styles/globals.css"

export default function Applayout({children} : {
  children: React.ReactNode
}) {
  return (
      <div className='MainApp'>
        <Navigation />
        <div className="Application">
          {children}
        </div>
      </div>
  )
}
