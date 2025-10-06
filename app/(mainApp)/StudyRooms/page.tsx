import React from 'react'
import styles from "@/assets/styles/StudyRooms.module.css"
import SearchStudyRoom from './SearchStudyRoom'

export default function StudyRoom() {
  return (
    <div className={styles.StudyRoom}>
      <h1> Study Rooms </h1>
      <SearchStudyRoom />
    </div>
  )
}
