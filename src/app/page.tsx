import React from 'react'
import Hero from '../app/component/hero'
import { client } from '@/sanity/lib/client'

async function Home() {
  const products = await client.fetch(`*[_type == "product"]`)
  
  return (
    <div className='w-full-2xl mx-auto overflow-hidden'>
      <Hero products={products}/>
    </div>
  )
}

export default Home
