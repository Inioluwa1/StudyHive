"use client"

import React, {useState} from 'react'
import Form from "next/form"
import styles from '@/assets/styles/Profile.module.css'

export default function ProfileForm() {
  const [disabled, setDisabled] = useState(true)

  const handleDisable = () => {
    setDisabled(false)
    console.log("disable")
  }

  const handleSubmit = () => {

    setDisabled(true)
    console.log("submitted")
  }

  return (
    <Form action="#">
      <div className={styles.Details}>
        <label htmlFor="name"> Name </label>
        <input
          id= "name" name = "name"
          type="text"
          value="Ayomide Adesanya"
          disabled={disabled}
        />
      </div>

      <div className={styles.Details}>
        <label htmlFor="email"> Email </label>
        <input
          id= "email" name = "email"
          type="email"
          value="adesanyanifesimi@gmail.com"
          disabled={disabled}
        />
      </div>

      <div className={styles.Details}>
        <label htmlFor="bio"> Bio </label>
        <input
          id= "bio" name = "bio"
          type="text"
          value="An engineering student"
          disabled={disabled}
        />
      </div>

      <div className={styles.ButtonContainer}>
        <button type="submit" onClick={handleDisable} > Edit </button>
        <button type="submit" onClick={handleSubmit}> Update </button>
      </div>
    </Form>
  )
}
