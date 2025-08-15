import React from 'react'
import Container from '../components/providers/Containers'
import { Separator } from '../../fragments/separator'
import { OptionItem } from '@/config/Team'

const data : OptionItem[] = [
    {
        name: "Mailing Address",
        role: " Jl. Poras No.07, Loji,  Kota Bogor, "
     },
     {
      name: "Email Address"  ,
      role: "yusufzolldyck@gmail.com"
     },
     {
      name: "Phone Number"  ,
      role: "+62 899-9069-933"
     }
]

function Contact() {
  return (
    <Container
         id="Contact"
         maxW={false}
         className=" max-w-6xl m-auto  space-y-10 px-5  md:flex md:items-center  "
     sectionName="Contact Section"
      ariaLabel="Portfolio Contact Section"
      role="banner">
          <header className='  space-y-5 md:space-y-10 w-full'>
                <h1 className=' font-bold text-primary  lg:text-8xl text-[12dvw]  font-spartan tracking-tighter'>
               Kontak Kami
                </h1>
      <Separator className='  lg:data-[orientation=horizontal]:w-[24dvw]  top-0  border-primary border-[1.4px]'/>
              </header>
      <div className="  flex md:justify-center  w-full">
        <ul className=' space-y-10  w-fit'>

        {data.map((item, i )  => (

<li key={i} className=' space-y-2'>
<header>
    <h3 className=' font-bold text-primary  text-2xl   font-spartan tracking-tighter'>
        {item.name}
    </h3>
</header>
<p className=' text-sm'>
    {item.role}
</p>
</li>
        ))}
        </ul>
      </div>
    </Container>
  )
}

export default Contact
