import React from 'react'
import Image from "next/image"
import styles from "@/assets/styles/Profile.module.css"
import ProfileForm from "./ProfileForm"

export default function ProfilePage() {
  return (
    <div className={styles.ProfileRoom}>
      <h1> Profile </h1>
      <div className={styles.ImageContainer}>
        <Image 
          src="/Avatar.svg"
          alt="Ayomide"
          height={80}
          width={80}
          className = ""
        />
        <h1> Adesanya Ayomide </h1>
      </div>
      <ProfileForm />
    </div>
  )
}
