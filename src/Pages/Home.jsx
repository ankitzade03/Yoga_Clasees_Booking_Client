import React from 'react'

import { FeatureClasses } from '../Component/HomePageCompo/FeatureClasses'
import { WeeklySchedule } from '../Component/HomePageCompo/WeeklySchedule'
import { Instructor } from '../Component/HomePageCompo/Instructor'
import { Scroller } from '../Component/HomePageCompo/Scroller'


export const Home = () => {
  return (
    <>
      <Scroller></Scroller>
      <FeatureClasses></FeatureClasses>
      <WeeklySchedule></WeeklySchedule>
      <Instructor></Instructor>
    </>
  )
}

