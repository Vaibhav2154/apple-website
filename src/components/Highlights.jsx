import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { rightImg, watchImg } from '../utils'
import Videocarousal from './Videocarousal'

const Highlights = () => {



  useGSAP(() =>{
    gsap.to('#title', {
      opacity: 1,
      x: 0, // Changed from y: 0 to x: 0
      duration: 1,
      ease: 'power2.out'
    })
    gsap.to('.link', {
      opacity: 1,
      x: 0, // Changed from y: 0 to x: 0
      duration: 1,
      stagger: 0.25,
      ease: 'power2.out'
    })
  }, [])

  return (
    <section id='highlights' className='w-screen h-full overflow-hidden common-padding bg-zinc'>
      <div className='screen-max-width'>
        <div className='items-end justify-between w-full mb-12 md:flex'>
          <h1 
            id='title' 
            className='section-heading' // Initial position from left
          >
            Get the latest highlights
          </h1>
          <div className='flex flex-wrap items-end gap-5'>
            <p className='link'>Watch the film
              <img src={watchImg} alt="watch-image" className='ml-2' />
            </p>
            <p className='link'>Watch the event
              <img src={rightImg} alt="right-image" className='ml-2' />
            </p>
          </div>
        </div>
        <Videocarousal/>
      </div>
    </section>
  )
}

export default Highlights