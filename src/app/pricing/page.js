import PageHeaders from '@/components/PageHeaders'
import React from 'react'

const Princingpage = () => {
  return (
    <div>
        <PageHeaders title='Check Out Our Pricing' subtitle='Our pricing is simple'/>
        <div className='bg-white text-black rounded-lg max-w-xs mx-auto p-4 text-center mt-4'>
            <h3 className='font-bold text-3xl'>Free</h3>
            <h4>Free Forever</h4>
        </div>
    </div>
  )
}

export default Princingpage