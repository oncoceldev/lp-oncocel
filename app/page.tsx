import Hero from '@/components/home/Hero'
import AboutSection from '@/components/home/AboutSection'
import ResearchLinesSection from '@/components/home/ResearchLinesSection'
import MembersSection from '@/components/members/MembersSection'
import ProjectsSection from '@/components/home/ProjectsSection'
import ExtensionSection from '@/components/home/ExtensionSection'
import PublicationsSection from '@/components/publications/PublicationsSection'
import JoinSection from '@/components/home/JoinSection'
import ContactSection from '@/components/home/ContactSection'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ResearchLinesSection />
      <MembersSection />
      <ProjectsSection />
      <ExtensionSection />
      <PublicationsSection />
      <JoinSection />
      <ContactSection />
    </>
  )
}
