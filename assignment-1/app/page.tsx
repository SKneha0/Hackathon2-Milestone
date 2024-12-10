import React from 'react'
import About from '@/app/About/page' 
import Servicess from '@/app/servicess/page'
import Contact from '@/app/Contact/page'
import Home from '@/components/Home'
function page() {
  return (
    <div>
      <Home />
     <About />
     <Servicess />
     <Contact />
    </div>
  )
}

export default page
