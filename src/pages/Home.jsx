import React from 'react'
import CountDown from '../component/countDown/CountDown'
import Feedback from '../component/feedback/Feedback'
import Hero from '../component/Hero/Hero'
import Project from '../component/project/Project'
import Story from '../component/story/Story'
import Team from '../component/team/Team'

const Home = () => {
  return (
    <>
        <Hero />
        <Story />
        <Project />
        <CountDown />
        <Team />
        <Feedback />
    </>
  )
}

export default Home