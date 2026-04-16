'use client'

import { useEffect } from 'react'
import AboutHeroSection from '../../components/about/AboutHeroSection'
import MissionVisionSection from '../../components/about/MissionVisionSection'
import ValuesSection from '../../components/about/ValuesSection'
import JourneySection from '../../components/about/JourneySection'
import StatsSection from '../../components/about/StatsSection'
import TeamSection from '../../components/about/TeamSection'
import AboutCTASection from '../../components/about/AboutCTASection'
import FullAboute from '../../components/about/FullAboute'

function About() {
  useEffect(() => {
    document.title = 'About | ConnectSkool - Transforming Education'
  }, [])

  return (
    <>
      <AboutHeroSection />
      <FullAboute/>
      {/* <MissionVisionSection /> */}
      {/* <ValuesSection /> */}
      {/* <StatsSection /> */}
      {/* <JourneySection /> */}
      {/* <TeamSection /> */}
      <AboutCTASection />
    </>
  )
}

export default About
