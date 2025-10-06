"use client"

import React, {useState} from 'react'
import Form from "next/form"
import styles from '@/assets/styles/Profile.module.css'

export default function ProfileForm() {
  const [name, setName] = useState("Ayomide Adesanys")
  const [email, setEmail] = useState("adesanyanifesimi@gmail.com")
  const [bio, setBio] = useState("I am an engineering student")
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
          value={name}
          disabled={disabled}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className={styles.Details}>
        <label htmlFor="email"> Email </label>
        <input
          id= "email" name = "email"
          type="email"
          value={email}
          disabled={disabled}
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>

      <div className={styles.Details}>
        <label htmlFor="bio"> Bio </label>
        <input
          id= "bio" name = "bio"
          type="text"
          value={bio}
          disabled={disabled}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>

      <div className={styles.ButtonContainer}>
        <button type="submit" onClick={handleDisable} > Edit </button>
        <button type="submit" onClick={handleSubmit}> Update </button>
      </div>
    </Form>
  )
}
