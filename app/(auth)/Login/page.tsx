import React from 'react'
import styles from "@/assets/styles/LoginPage.module.css"
import LoginForm from "./LoginForm"

export default function LoginPage() {
  return (
    <div className={styles.Container} >
      <div className={styles.AppContainer}>
        <h1 className={styles.Header}> Login </h1>

        <LoginForm />

      </div>
    </div>
  )
}
