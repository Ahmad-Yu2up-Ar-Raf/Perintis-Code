import type { Metadata } from "next";

export const links = {
  sourceCode: "https://github.com/Ahmad-Yu2up-Ar-Raf",
  ownerName: "Ahmad Yusuf Ar-Rafi",
  ownerEmail: "yusufzolldyck@gmail.com",
  appUrl: "https://nextframe.vercel.app", 
  supportEmail: "ahmad.yusuf.pesat@gmail.com",
} as const;

export const appConfig = {
  name: "NextFrame",
  tagline: "Crafting Digital Excellence Through Code & Design",
  description: "Professional web development and UI/UX design services. We create stunning web applications, responsive websites, and exceptional user experiences tailored to elevate your business.",
  version: "1.0.0",
} as const;

export const siteConfig: Metadata = {
  title: {
    default: `${appConfig.name} - ${appConfig.tagline}`,
    template: `%s | ${appConfig.name}`,
  },
  description: appConfig.description,
  keywords: [
    // Core Services
    "web development services",
    "website development",
    "web application development",
    "landing page design",
    "responsive website",
    "ui ux design services",
    "user interface design",
    "user experience design",
    "web design agency",
    "custom web development",
    
    // Business Keywords
    "digital agency",
    "web development company",
    "professional web services",
    "business website",
    "corporate website",
    "startup web development",
    "e-commerce development",
    "portfolio website",
    "business landing page",
    "conversion optimization",
    
    // Tech Stack Keywords
    "next.js development",
    "react development",
    "typescript development",
    "modern web technologies",
    "full stack development",
    "frontend development",
    "backend development",
    "progressive web app",
    "mobile responsive",
    
    // Location & Service Keywords
    "web developer indonesia",
    "jasa pembuatan website",
    "developer website profesional",
    "desain website modern",
    "aplikasi web custom",
    "NextFrame web services",
    "professional web designer",
    "creative digital solutions",
  ] as Array<string>,
  
  authors: [
    {
      name: links.ownerName,
      url: links.sourceCode,
    }
  ],
  
  creator: links.ownerName,
  publisher: appConfig.name,
  
  metadataBase: new URL(links.appUrl),
  
  alternates: {
    canonical: "/",
  },
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: links.appUrl,
    title: `${appConfig.name} - ${appConfig.tagline}`,
    description: appConfig.description,
    siteName: appConfig.name,
    images: [
      {
        url: "/og-image.png", // Buat OG image 1200x630px dengan branding NextFrame
        width: 1200,
        height: 630,
        alt: `${appConfig.name} - Professional Web Development & UI/UX Design Services`,
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: `${appConfig.name} - ${appConfig.tagline}`,
    description: appConfig.description,
    creator: "@yusuf", // Ganti dengan Twitter handle Anda
    images: ["/twitter-image.png"], // Buat Twitter image 1200x600px dengan branding NextFrame
  },
  
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  category: "Web Development Services",
  
  other: {
    "application-name": appConfig.name,
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-title": appConfig.name,
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "theme-color": "#2563eb", // Sesuaikan dengan brand color NextFrame
    "color-scheme": "light dark",
  },
  
  // Schema.org structured data
  verification: {
    // google: "your-google-verification-code",
    // bing: "your-bing-verification-code",
  },
} as const;

// Additional SEO utilities
export const generatePageMetadata = (params: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata => {
  const { title, description, path = "", image } = params;
  
  return {
    title: title ? `${title} | ${appConfig.name}` : siteConfig.title,
    description: description || appConfig.description,
    openGraph: {
      title: title ? `${title} | ${appConfig.name}` : `${appConfig.name} - ${appConfig.tagline}`,
      description: description || appConfig.description,
      url: `${links.appUrl}${path}`,
      images: image ? [{ url: image }] : siteConfig.openGraph?.images,
    },
    twitter: {
      title: title ? `${title} | ${appConfig.name}` : `${appConfig.name} - ${appConfig.tagline}`,
      description: description || appConfig.description,
      images: image ? [image] : siteConfig.twitter?.images,
    },
  };
};