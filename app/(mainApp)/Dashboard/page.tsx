import React from 'react'
import Image from "next/image"
import Link from 'next/link';
import JoinedRoom from "./JoinedRoom"
import NewRoom from "./NewRoom"
import styles from "@/assets/styles/Dashboard.module.css"


export default function Dashboard() {
  return (
    <div className={styles.DashboardContainer}>

      <Link href = "/Profile"className={styles.ProfileContainer}>
        <Image
          src="/Profile.png"
          alt="Person"
          width={40}
          height={40}
          className={styles.Profile}
        />
        <h1> Ayo </h1>
      </Link>

    <div className={styles.Dashboard}>
      <h1> Welcome, Ayo!</h1>
      <JoinedRoom />
      <NewRoom />
    </div>

    </div>
  )
}
