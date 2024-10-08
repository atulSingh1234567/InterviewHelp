import React from 'react'
import Course from '../components/Course/Course.jsx'

export default function CoursePage() {
    const courseArray = [
        {
            course: "JAVA Backend Development - Live",
            imgurl: "goto"
        },
        {
            course: "DSA to Development: A Complete Guide",
            imgurl: "data:image/png;base64,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"
        },
        {
            course: "DSA to Development: A Complete Guide",
            imgurl: "goto"
        },
        {
            course: "DSA to Development: A Complete Guide",
            imgurl: "goto"
        },
        {
            course: "DSA to Development: A Complete Guide",
            imgurl: "goto"
        }
    ]
  return (
    <div className='flex flex-col mt-20 items-center'>
        <h1 className='font-bold w-full px-32 mb-6 text-2xl text-black'>Courses</h1>
      <div className='flex justify-between w-[80%] gap-4 flex-wrap'>
        {
            courseArray.map(function(item){
                return <Course course={item.course} imgurl={item.imgurl}/>
            })
        }
      </div>
    </div>
  )
}
