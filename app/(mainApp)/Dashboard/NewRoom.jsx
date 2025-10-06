import React from 'react'
import styles from "@/assets/styles/Dashboard.module.css"

export default function NewRoom() {
  return (
      <form className={styles.NewRoomForm}>
        <label htmlFor = "RoomTitle" > 
          New Room
        </label>
        <div className={styles.NewRoomInput}> 
          <input 
            type="text"
            placeholder="Enter room title"

          />
          <button> Create Room </button>
        </div>
      </form>
  )
}
