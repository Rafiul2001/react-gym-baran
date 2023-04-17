import React from 'react'
import './main.css'
import { Details, ProgramsThatCanBeTaken, Testimonials } from '../../components/index'

const Main = () => {
  return (
    <div className='main'>
      <Details />
      <ProgramsThatCanBeTaken />
      <Testimonials />
    </div>
  )
}

export default Main