"use client"

import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import "./Navigation.css"

const NavigationLinks = [
  {
    name: "Dashboard",
    href: "/Dashboard",
    icon: "/Dashboard.png",
  },
  {
    name: "Profile",
    href: "/Profile",
    icon: "/Profile.png",
  },
  {
    name: "Study Rooms",
    href: "/StudyRooms",
    icon: "/Studyroom.png",
  },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <div className="Navigation">
      <div className= "Header">
        <Image 
          src = "/Study 2.png"
          alt = "Study Platform" 
          height= {20}
          width= {50} 
        />
        <h1> Study Platform </h1>
      </div>

      {NavigationLinks.map(link => {
        const isActive = pathname === link.href ||
        (pathname.startsWith(link.href) && link.href !== "/")
      
        return (
        <div key={link.name} className="NavigationLinksContainer">
          <Link 
            href={link.href} 
            className={isActive ? "ActiveNavigationLinks" : "NavigationLinks"}>
            <Image 
              src = {link.icon}
              alt = {link.name}
              width = {30}
              height = {30}
              className="Icon"
            /> 
              {link.name} 
          </Link>
      </div>
      )})}
    </div>
  )
}
