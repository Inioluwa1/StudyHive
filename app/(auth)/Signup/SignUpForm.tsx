"use client"

import React, {useState} from 'react'
import { useFormStatus } from "react-dom"
// import { useSignUp } from '@clerk/nextjs'
// import { ClerkAPIResponseError } from '@clerk/types'
import { useRouter } from "next/navigation"
import Form from "next/form"
import Link from 'next/link'
import styles from "@/assets/styles/SignupPage.module.css"

export default function SignupForm() {
  // const {signUp, setActive, isLoaded } = useSignUp();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [error, setError] = useState('')
  const { pending } = useFormStatus();

  const router = useRouter()

  const handleSubmit = async () => {
    console.log("button clicked")
    router.push('/Homepage')


    // if(!isLoaded) return 

    // if(!signUp) return
    // try{
    //   //create a new user with their email and password
    //   const result  = await signUp.create({
    //     emailAddress: email, 
    //     password,
    //   })

    //   //Activate the session
    //   if(result.status === 'complete'){
    //     await setActive({session: result.createdSessionId})
    //     router.push("/Homepage")
    //   } else {
    //     console.log(result)
    //   }
    // } catch(err){
    //   const error = err as ClerkAPIResponseError
    //   setError(error.errors?.[0]?.message || "Sign up failed")
    // }

    // console.log("Sign up")
  }

  return (
    <div>

        <Form action="#" onSubmit={handleSubmit}>
          <div className={styles.Details}>
            <label htmlFor="name"> Name </label>
            <input 
              type="text" 
              id="name" 
              name="name" required 
              placeholder="Enter your name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className={styles.Details}>
            <label htmlFor="email"> Email </label>
            <input 
              type="email" 
              id="email" 
              name="email" required 
              placeholder="Enter your email"
              value={email}
              onChange = {(e) => setEmail(e.target.value)} 
            />
          </div>

          <div className={styles.Details}>
            <label htmlFor="password"> Password </label>
            <input 
              type="password" 
              id="password" 
              name="password" required 
              placeholder="Enter your password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* {error && <p className={styles.Error}> {error} </p>} */}

          <div id="clerk-captcha"></div>
          
          <button 
            type="submit" 
            className={styles.Button} 
            disabled={pending}
          > 
              Register 
          </button>

        </Form>

        <span className={styles.Login}>
          <p> Already have an account? <Link href="/Login" className={styles.Link}> Login </Link> </p>
        </span>

    </div>
  )
}
