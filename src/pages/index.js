import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'

export default function Home() {
  return (
    <div className={styles.div}>
      <div id="particles-js">hello</div>
      <Link href='/testpage.js'>Go to test page</Link>
      <Script src=''/>
    </div>
  )
}
