import React from 'react'
import CountDown from '../component/countDown/CountDown'
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
    </>
  )
}

export default Home