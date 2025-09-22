import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../fragments/card'
import { cn } from '@/lib/utils'
import { Separator } from '../../fragments/separator'



type ComponentProps = {
    content: string
    title: string
    className?: string
}
function SolutionCard({ content, className, title } : ComponentProps) {
  return (
   <Card className={cn(" space-y-2 lg:text-center shadow-none sm:max-w-[18em] m-auto  border-0", className)}>
          <CardHeader className=" space-y-3  border-primary px-0  ">
                <CardTitle className=" text-center space-y-4 flex flex-col font-semibold leading-tight text-2xl text-foreground transition-colors">
                      <span className=" tracking-tight font-bold ">
         {title}
                        </span>  
                 
                      </CardTitle>
                      <Separator className='  md:data-[orientation=horizontal]:w-[11dvw] mx-auto top-0  border-primary border-[1.4px]'/>
                        </CardHeader>
                            <CardContent className="relative text-justify max-h-80 lg:max-h-54 overflow-hidden py-0 px-0">
                           <CardDescription className=' text-base  text-justify lg:text-center  text-black'>
                            {content}
                           </CardDescription>
                            </CardContent>
        
    </Card>
  )
}

export default SolutionCard
