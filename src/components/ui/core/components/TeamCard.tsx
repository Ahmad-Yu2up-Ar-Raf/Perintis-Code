import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../fragments/card'
import { OptionItem } from '@/types'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import fs from "node:fs/promises";

import { getPlaiceholder } from "plaiceholder";


type componentsProps = {
    DataTeam : OptionItem
    className?: string
    
}



export default async function TeamCard({ DataTeam, className }: componentsProps) {
      const src = `/assets/team/${DataTeam.name}.jpg`;

  const buffer = await fs.readFile(`./public${src}`);

  const { base64 } = await getPlaiceholder(buffer);
  return (
    <Card className={cn("group max-w-sm m-auto shadow-none gap-5 overflow-hidden border-0 relative transition-all duration-300 bg-background  space-y-4 py-0 rounded-none   px-0", className)}>
       <CardContent className="relative max-h-80 lg:max-h-54 overflow-hidden py-0 px-0">
        <Image src={src.replace('./public', '')} placeholder='blur' blurDataURL={base64} width={500} height={600} alt={`${DataTeam.name}-image`} className=' inset-0 h-full  object-top object-cover transition-transform duration-300 grayscale  w-full group-hover:scale-105'/>
      </CardContent>
      <CardHeader className=" space-y-1 px-0 cursor-pointer  ">

          <CardTitle className=" space-y-4 flex flex-col font-semibold leading-tight text-2xl text-foreground transition-colors">
          <span className=" text-primary tracking-tight font-obld ">
{DataTeam.name}
            </span>  
     
          </CardTitle>
          <CardDescription className="text-sm  text-black dark:text-white line-clamp-2">
        {DataTeam.role}
        </CardDescription>
       
      

      </CardHeader>
    </Card>
  )
}


