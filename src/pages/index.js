import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'

export default function Home() {
  let link = styles.link
  return (
    <div className={styles.div}>
      <ul className={styles.ul}>
        <li><Link className={link} href='/portfolio'>Portfolio</Link></li>
        <li><Link className={link} href='/contact'>Contact</Link></li>
      </ul>
    </div>
  )
}
