import React from 'react'
import Container from '../components/providers/Containers'
import { Team_data } from '@/config/Team'
import TeamCard from '../components/TeamCard'



function Team() {



  return (
        <Container
         id="Team"
         title={"Tim Kami"}
     sectionName="Team Section"
      ariaLabel="Portfolio Team Section"
      role="banner"
     className="text-center space-y-17 "
    > 

      <section className='  gap-15 grid md:grid-cols-2 lg:grid-cols-4'>
        {Team_data.map((item, i) => (
          <TeamCard
          DataTeam={item}
          key={i}
          />
        ))}
      </section>
    </Container>
  )
}

export default Team
