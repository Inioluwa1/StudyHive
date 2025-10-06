import React from 'react'
import styles from "@/assets/styles/StudyRooms.module.css"

export default function SearchStudyRoom() {
  return (
    <form className={styles.StudyRoomForm}>
      <div className={styles.StudyRoomInput}> 
        <input 
          type="text"
          placeholder="Search study rooms..."
          
        />
        <button > Search Room </button>
      </div>
    </form>
  )
}
