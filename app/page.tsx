"use client"

import Image from 'next/image';
import Link from 'next/link';
import styles from "@/assets/styles/WelcomePage.module.css";

export default function Home() {
  return (
    <div className={styles.Container}>
      <div className={styles.AppContainer}>
        <h1 className={styles.Header}> Welcome to StudyHive </h1>
        <div className={styles.ImageContainer}>
          <Image
            src="/Read.jpg"
            alt= "Picture of a person reading"
            height={300}
            width={300}
          /> 
          <Image
            src="/Read 2.jpg"
            alt= "Picture of a person reading"
            height={250}
            width={220}
          /> 
        </div>
        <div className={styles.ButtonContainer}>
          <Link href="/Signup" className={styles.Button}> Signup </Link>
          <Link href="/Login" className={styles.Button}> Login </Link>
        </div>
      </div>
    </div>
  );
}
