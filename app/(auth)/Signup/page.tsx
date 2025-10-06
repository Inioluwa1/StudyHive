import React from 'react'
import Image from 'next/image'
import styles from "@/assets/styles/SignupPage.module.css"
import SignUpForm from "./SignUpForm"

export default function SignupPage() {
  return (
    <div className={styles.Container}>
      <div className={styles.AppContainer}>
        <h1 className={styles.Header}> Register </h1>
        <Image
          src="/Avatar.svg"
          alt="Shadow avatar"
          width={100}
          height={100}
          className={styles.Avatar}
        />

        <SignUpForm />
      </div>
    </div>
  )
}
