import React from 'react'

const RightCardCont = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white text-xl font-semibold h-10 w-10 rounded-full flex justify-center items-center'>{props.id+1}</h2>
            <div>
                <p className='text-lg leading-normal text-white mb-14'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero velit voluptatem quo veritatis quam? Quasi.</p>
            <div className='flex justify-between'>
                <button style={{backgroundColor: props.color}} className=' text-white font-medium px-8 py-2 rounded-full '>{props.tag}</button>
                <button  className=' text-white font-medium px-4 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
            </div>
            </div>
        </div>
  )
}

export default RightCardCont