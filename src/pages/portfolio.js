import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import portfolioCard from '@/components/portfolioCard'
// import Home from '../styles/Home.modules.css'

export default function testpage() {
  const [port, setPort] = useState([])
  useEffect(()=> {
    const request = async() => {
      let req = await fetch('')
      let res = await res.json()
      console.log(res)
      setPort(res)
    }
    request()
  }, [])

  return (
    <div>
        <h1>testpage</h1>
        <Link href="/">go home</Link>

    </div>
  )
}
