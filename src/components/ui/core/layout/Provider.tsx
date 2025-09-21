'use client';



import { ProgressProvider } from '@bprogress/next/app';
import { AnimatePresence } from 'framer-motion';
import { FloatingNav } from '../components/site-header';
import ReactLenis from 'lenis/react'


const Providers = ({ children }: { children: React.ReactNode }) => {
   

    
    return (
 <ReactLenis root>

        <ProgressProvider 
            height="2px"
            color="var(--primary)"

            options={{ 
                showSpinner: false,
                minimum: 0.3,
                easing: 'ease',
                speed: 200,
            }}
            shallowRouting
        >
            <AnimatePresence mode='wait' >

            { children }
            </AnimatePresence>
            <FloatingNav/>
        </ProgressProvider>
 </ReactLenis>

 

  
    );
};

export default Providers;