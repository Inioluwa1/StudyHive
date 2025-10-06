"use client"

import React, {useState} from 'react'
import { useSignUp } from '@clerk/nextjs'
import { useRouter } from "next/navigation"
import Form from "next/form"
import Link from "next/link"
import styles from "@/assets/styles/LoginPage.module.css"


export default function LoginPage() {
  const router = useRouter()

  const handleLogin = () => {
    console.log("logged")
    router.push('/Dashboard')
  }
  
  
  return (
    <div>

        <Form action={handleLogin} className={styles.Details}>
          <input 
            type="email" 
            name="email" required 
            placeholder="Email" 
            className={styles.Input} />
          <input 
            type="password" 
            name="pasword" required 
            placeholder="Password" 
            className={styles.Input} />

          <div className={styles.Forgotten}>
            <div className={styles.Checkbox}>
              <input 
                type="checkbox" 
                id="remember" 
                name="remember" />
              <label htmlFor="remember"> Remember me </label>
            </div>
            <Link href="#" className={styles.Link} > Forgot Password? </Link>
          </div>

          <button type="submit" className={styles.Button}> Log In </button>
        </Form>


        <span>
          <p className={styles.Signin}> Don&apos;t have an account? 
              <Link href="Signup" className={styles.Link}> Register </Link> 
          </p>
        </span>

    </div>
  )
}
