import {
    Geist,
    Geist_Mono,
    Instrument_Sans,
    Inter,
    Mulish,
    Nunito,
    Poppins,
   Delius_Swash_Caps,
    Noto_Sans_Mono, 
    League_Spartan,
  } from 'next/font/google';
  
  import { cn } from '@/lib/utils';
  
  const fontSans = Geist({
    subsets: ['latin'],
    variable: '--font-sans'
  });
  const fontPoppins = Poppins({
      subsets: ['latin'],
      variable: '--font-poppins',
      weight: ['100', '200', '300', '400', '500', '600', '700' ,'800' , '900']
  });
  const fontSpartan = League_Spartan({
    subsets: ['latin'],
    variable: '--font-spartan'
  });
  const fontDelius = Delius_Swash_Caps({
    subsets: ['latin'],
    variable: '--font-delius',
    weight: '400'
  });
  
  const fontMono = Geist_Mono({
    subsets: ['latin'],
    variable: '--font-mono'
  });
  
  const fontNunito = Nunito({
    subsets: ['latin'],
    variable: '--font-nunito'
  });
  
  const fontInstrument = Instrument_Sans({
    subsets: ['latin'],
    variable: '--font-instrument'
  });
  
  const fontNotoMono = Noto_Sans_Mono({
    subsets: ['latin'],
    variable: '--font-noto-mono'
  });
  
  const fontMullish = Mulish({
    subsets: ['latin'],
    variable: '--font-mullish'
  });
  
  const fontInter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
  });
  
  export const fontVariables = cn(
    fontSans.variable,
    fontMono.variable,
    fontInstrument.variable,
    fontNotoMono.variable,
    fontMullish.variable,
    fontInter.variable,
    fontNunito.variable,
    fontDelius.variable,
    fontSpartan.variable,
    fontPoppins.variable
  );