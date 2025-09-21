import React from 'react'
import { Card, CardContent,  CardHeader, CardTitle } from '../../fragments/card'
import { PrototypeItem } from '@/types'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import fs from "node:fs/promises";

import { getPlaiceholder } from "plaiceholder";


type componentsProps = {
    DataPrototype : PrototypeItem
    className?: string
    
}



export default async function PrototypeCard({ DataPrototype, className }: componentsProps) {
      const src = `/assets/prototype/${DataPrototype.image}`;

  const buffer = await fs.readFile(`./public${src}`);

  const { base64 } = await getPlaiceholder(buffer);
  return (
    <Card className={cn("group max-w-sm m-auto shadow-none gap-5  border-0 relative transition-all duration-300 bg-background  space-y-4 py-0 rounded-none   px-0", className)}>
       <CardContent className="relative max-h-[70dvh] py-0 px-0">
        <Image src={src.replace('./public', '')} placeholder='blur' blurDataURL={base64} width={500} height={600} alt={`${DataPrototype.name}-image`} className=' inset-0 h-full max-h-[73dvh]  object-top object-cover transition-transform duration-300 grayscale   w-full group-hover:scale-105'/>
      </CardContent>
      <CardHeader className=" text-center space-y-1 px-0 cursor-pointer  ">

          <CardTitle className=" space-y-4 flex flex-col font-semibold leading-tight text-xl text-foreground transition-colors">
          <span className=" sr-only text-primary tracking-tight font-obld ">
{DataPrototype.name}
            </span>  
     
          </CardTitle>
          {/* <CardDescription className="text-sm  text-black dark:text-white line-clamp-2">
        {DataPrototype.Link}
        </CardDescription> */}
       
      

      </CardHeader>
    </Card>
  )
}


