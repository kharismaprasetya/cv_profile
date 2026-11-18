import type { Metadata } from 'next'
import TopNavBar from '@/components/navbar/TopNavBar';

export const metadata: Metadata = {
  title: "Kharisma Prasetya - Projects",
  description: "Kharisma Prasetya - Projects",
  openGraph: {
    title: "Kharisma Prasetya - Projects",
    description: "Kharisma Prasetya - Projects",
    url: "https://kharismaprasetya.vercel.app/",
    siteName: "Kharisma Prasetya",
    images: [
      {
        url: "https://kharismaprasetya.vercel.app/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Kharisma Prasetya - CV Profile",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function Project() {
  return (
    <div>
      <TopNavBar />
    </div>
  )
}