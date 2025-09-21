import { cn } from "@/lib/utils"
import React from "react"


type ContainerProps = {
  id: string
  children: React.ReactNode
  className?: string
  maxW?: boolean
  role?: string
  ariaLabel?: string
  dataTestId?: string
  sectionName?: string
  container?: string
  title?: string

} 

export default function Container (
  {
    id,
    
    children,
    className,
    maxW = true,
    role,
    
    ariaLabel,
    title ,
    dataTestId,
    sectionName,

    container = " min-h-dvh container    w-full content-center",
    ...props
  } : ContainerProps) {


  return (
    <section
      id={id}
      className={cn(
        container, 
        maxW && 'p-7 md:p-10'
      )}
      role={role || "region"}
      aria-label={ariaLabel || sectionName || id}
      data-testid={dataTestId || `section-${id}`}
      data-section-name={sectionName || id}

    >
      <main 
        {...props}
        className={cn(
          "mx-auto      w-full",
          className,
        )}
      >
        {title && (

            <header>
                <h1 className=' font-bold text-primary  lg:text-8xl text-[12dvw]  font-spartan tracking-tighter'>
                  {title}
                </h1>
              </header>
        )}
        {children}
      </main>
    </section>
  )
}

Container.displayName = 'Container'

