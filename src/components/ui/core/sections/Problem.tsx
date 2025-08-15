import React from 'react'
import Container from '../components/providers/Containers'
import { Separator } from '../../fragments/separator'

function Problem() {
  return (
    <Container
     title={"Masalah Client"}
      id="Problem"
        className="text-center space-y-6 md:space-y-13 "
     sectionName="Problem Section"
      ariaLabel="Portfolio Problem Section"
      role="banner"
    >
        
      <Separator className='  lg:data-[orientation=horizontal]:w-[24dvw] mx-auto top-0  border-primary border-[1.4px]'/>
      <p className=' text-justify text-base max-w-2xl m-auto '>
Pada masa ini, banyak pelaku usaha dan instansi yang membutuhkan media digital untuk
menunjang kegiatan mereka. Namun, tidak sedikit yang masih memiliki website dengan tampilan kurang menarik, sulit diakses di perangkat mobile, atau bahkan belum memiliki website sama sekali. Akibatnya, jangkauan pasar menjadi terbatas dan potensi bisnis tidak berkembang secara maksimal
      </p>
    </Container>
  )
}

export default Problem
