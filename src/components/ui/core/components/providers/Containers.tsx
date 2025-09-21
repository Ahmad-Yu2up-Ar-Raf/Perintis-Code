import { cn } from "@/lib/utils"
import React, { forwardRef } from "react"


type ContainerProps<T extends React.ElementType = 'section'> = {
  id: string
  children: React.ReactNode
  className?: string
  maxW?: boolean
  role?: string
  ariaLabel?: string
  dataTestId?: string
  sectionName?: string
  container?: string
title? : string
  as?: T
} & React.ComponentPropsWithoutRef<T>

const Container = forwardRef<HTMLElement, ContainerProps<any>>((
  {
    id,
    
    children,
    className,
    maxW = false,
    role,
    title,
    ariaLabel,
    dataTestId,
    sectionName,
    as = 'section',
    container = "container  min-h-dvh    w-full content-center",
    ...props
  }, 
  ref
) => {
  const Component = as

  return (
  <Component
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
    </Component>
  )
})

Container.displayName = 'Container'

export default Container;