import React from 'react'
import Container from '../components/providers/Containers'
import PrototypeCard from '../components/Prototype'
import { Prototype_laptop_data, Prototype_mobile_data } from '@/config/prototype'


function Prototype() {



  return (
        <Container
         id="Prototype"
         title={"Prototype"}
     sectionName="Prototype Section"
      ariaLabel="Portfolio Prototype Section"
      role="banner"
     className="text-center py-20 space-y-17 "
    > 

      <section className='  gap-15 grid md:grid-cols-2 lg:grid-cols-3'>
        {Prototype_mobile_data.map((item, i) => (
          <PrototypeCard
          DataPrototype={item}
          key={i}
          />
        ))}
      </section>
      <section className='  gap-15 grid md:grid-cols-2 '>
        {Prototype_laptop_data.map((item, i) => (
          <PrototypeCard
          DataPrototype={item}
          key={i}
          />
        ))}
      </section>
    </Container>
  )
}

export default Prototype
