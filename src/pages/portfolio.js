import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import PortfolioCard from '@/components/portfolioCard'
// import PortfolioCard from '@/components/portfolioCard'
// import Home from '../styles/Home.modules.css'

export default function testpage({projects}) {
  console.log(projects)
  return (
    <div>
        <h1>testpage</h1>
        <Link href="/">go home</Link>
        
        <PortfolioCard projects={projects} />
    </div>
  )
}

export async function getStaticProps(){
  const res = await fetch('http://127.0.0.1:3001/projects')
  const projects = await res.json()

  return {props: {projects}}
}