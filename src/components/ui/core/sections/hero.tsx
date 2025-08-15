import React from 'react'
import Container from '../components/providers/Containers'
import Image from 'next/image'
import { Separator } from '../../fragments/separator'

function Hero() {
  return (
    <Container
         id="Hero"
     sectionName="Hero Section"
      ariaLabel="Portfolio Hero Section"
      role="banner"
     
    >
         {/* <div className="from-accent-foreground/20 pointer-events-none absolute inset-x-0 z-10 top-0 left-0 h-full w-1/3 bg-gradient-to-r z-10  to-12%"/> */}
      <header className='

      space-y-4 md:space-y-10   relative z-20'>
        <h1 className=" tracking-tight md:leading-30 text-primary text-7xl font-bold md:text-[8rem] font-spartan  flex flex-col">


         <span>
          Business
          </span> 
    <span>

Profile
    </span>

       
        </h1>
        <Separator orientation="horizontal" className='   md:hidden' />
        <p className=' text-accent-foreground md:sr-only   text-xl  tracking-tight font-poppin '>By : Team Nextframe</p>
      </header>
          <Image src={'/assets/hero.jpg'} quality={100} priority  fill  alt='hero-image-cover' className='   hidden md:inline object-center object-cover z-0 transform absolute w-full h-full' />
      {/* Hello World */}

   <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t z-20 from-10%"></div>
       {/* <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-30% z-20"></div> */}
    </Container>
  )
}

export default Hero
