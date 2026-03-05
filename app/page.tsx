import type { Metadata } from 'next'
import Experience from "@/components/experience/Experience";
import Footer from "@/components/footer/Footer";
import Introduction from "@/components/introduction/Introduction";
import TopNavBar from '@/components/navbar/TopNavBar';
import Skill from '@/components/skill/Skill';
import SkillSliding from '@/components/skill/SkillSliding';

export const metadata: Metadata = {
  title: "Kharisma Prasetya - CV Profile",
  description: "Kharisma Prasetya - CV Profile",
  openGraph: {
    title: "Kharisma Prasetya - CV Profile",
    description: "Kharisma Prasetya - CV Profile",
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

export default function Home() {
  return (
    <div>
      <TopNavBar />
      <Introduction />
      <SkillSliding />
      <Experience />
      <Skill />
      <Footer />
    </div>
  );
}
