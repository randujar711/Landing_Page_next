import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import portfolioCard from '@/components/portfolioCard'
// import Home from '../styles/Home.modules.css'

export default function testpage({projects}) {
  console.log(projects)
  return (
    <div>
        <h1>testpage</h1>
        <Link href="/">go home</Link>
        
        <portfolioCard />

        {/* {projects[0].map((prod)=> {
          const {title, stack, desc} = prod
          return (
            <div>
              <h3>{title}</h3>
              <h4>{desc}</h4>
              <div>{stack}</div>
            </div>
            
          )
        })} */}

    </div>
  )
}

export async function getServerSideProps(){
  // const [port, setPort] = useState([])
  const res = await fetch('http://127.0.0.1:3001/projects')
  const projects = await res.json()

  return {props: {projects}}
}