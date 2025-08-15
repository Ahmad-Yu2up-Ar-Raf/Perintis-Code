import React from 'react'
import Container from '../components/providers/Containers'
import { Separator } from '../../fragments/separator'
import Image from 'next/image'

const TargetPasar: string[] = [
    "Pemilik Cafe",
"Toko Kue & Roti",
"Kuliner Khas Daerah"
]

function Target() {
  return (
    <Container 
    

      id="Target"
        className="  space-y-10  "
     sectionName="Target Section"
      ariaLabel="Portfolio Target Section"
      role="banner"
      maxW={false}
    >
        <div className=" m-auto max-w-7xl w-full relative h-[10dvh]">

        <Separator  className=' top-0 hidden md:inline  right-0  absolute   border-primary   lg:data-[orientation=horizontal]:w-[20dvw] border-[1.7px]'/>
        </div>
        <div className="md:flex  space-y-10 md:space-y-9 justify-between w-full">

       <section className='w-full'>
        <div   className=' px-5 lg:px-4 max-w-[35rem] m-auto  w-full space-y-3 md:space-y-12'>

               <header className=''>
                <h1 className=' font-bold text-primary  lg:text-8xl text-[12dvw]  font-spartan tracking-tighter'>
                 Target Pasar
                </h1>
              </header>
       <div className=' md:pr-20 md:px-10 space-y-8 md:space-y-8  text-xl'>
      
            <Separator className='  mx-auto top-0  border-primary border-[1.4px]'/>
        <ol className=' md:text-2xl list-inside list-disc '>
            {TargetPasar.map((item, i) => (

            <li key={i}>
{item}
            </li>
            ))

            }
        </ol>
       </div>
        </div>
       </section>
       <section className=' max-h-[100dvh] lg:px-0 px-5 w-full'>
    <Image src={'/assets/Target.jpg'}  quality={100} width={500} height={500}  alt='hero-image-cover' className='   object-center object-cover z-0  w-full h-full grayscale' />
       <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t z-20 from-20%"></div>
       </section>
        </div>
    </Container>
  )
}

export default Target
