import React from 'react'
import Container from '../components/providers/Containers'
import SolutionCard from '../components/SolutionCard'


const DataSolution : string[] = [
    "Kami membuat desain website sesuai kebutuhan klien dengan tampilan modern dan user-friendly, agar mudah digunakan oleh pengunjung.",
    "Desain yang kami buat dapat menyesuaikan ukuran layar, sehingga tetap nyaman dilihat di perangkat PC maupun smartphone.",
    "Kami memberikan layanan pemeliharaan website secara berkala dan dukungan teknis 24/7 untuk memastikan website klien tetap aman dan up-to-date."
]

function Solutions() {
  return (
<Container
     title={"Solusi"}
      id="Solution"
        className="text-center space-y-10 md:space-y-9 "
     sectionName="Solution Section"
      ariaLabel="Portfolio Solution Section"
      role="banner"
    >
         <section className='  gap-15 grid  lg:grid-cols-3'>
               {DataSolution.map((item, i) => ( 
                
<SolutionCard title={`Solusi ${i + 1}`}  content={item} key={i} />
               ))}
    </section>
    </Container>
  )
}

export default Solutions
