import React from 'react'
import Common from '@/Components/Common'
import Leftside from './leftside'
import Rightside from './rightside'

const page= () => {
  return (
    <div className='md:max-w-[1920px]'>
        <Common title="Blog List" subtitle="Blog"/>
        <div className='md:max-w-[1320px] gap-2 flex flex-col md:flex-row'>
        <Leftside/>
        <Rightside/>
        </div>
    </div>
  )
}
export default page