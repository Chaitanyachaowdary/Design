import React from 'react'
import latest from '../../assets/json data/latest_videos.json'
const Latest = () => {
  return (
    <div>
      <div className=' w-[100%] bg-black  text-[9vw] md:text-[9vw] leading-none  py-2 font-druk text-gray-300'>
             <h1 className='text-[70px] font-bold px-10'> D!</h1>
      </div>
     <section className="min-h-screen bg-black text-white px-4 ">
  <div className="h-[100vh] flex flex-col  md:flex-row  justify-between  space-y-10 ">
    
    {/* Left Title */}
    <div className="w-[40%]  mt-10">
      <h2 className="text-[25px] mt-5 font-bold  ">Categories</h2>
      <div className='mt-5'>
        <button className='bg-orange-800 font-semibold mx-2 text-gray-300 text-[15px] rounded-lg py-1 px-2 hover:bg-white hover:text-black'>All</button>
        <button  className='bg-gray-800  font-semibold mx-2  text-gray-300 text-[15px] rounded-lg py-1 px-2 hover:bg-white hover:text-black'>Events</button>
        <button  className='bg-gray-800   font-semibold mx-2  text-gray-300 text-[15px] rounded-lg py-1 px-2 hover:bg-white hover:text-black'>Case Studies</button>
        <button  className='bg-gray-800   font-semibold mx-2  text-gray-300 text-[15px] rounded-lg py-1 px-2 hover:bg-white hover:text-black'>Updates</button>
        <button  className='bg-gray-800  font-semibold mx-2  text-gray-300 text-[15px] rounded-lg py-1 px-2 hover:bg-white hover:text-black'>Perspective</button>
      </div>
      <h2 className="text-[25px] mt-5 font-bold ">View by Chapter</h2>
      <div className='mt-5'>
        <button className='bg-orange-800 font-semibold mx-2  text-gray-300 text-[15px] rounded-lg py-1 px-2 hover:bg-white hover:text-black'>All</button>
        <button  className='bg-gray-800  font-semibold mx-2 text-gray-300 text-[15px] rounded-lg py-1 px-2 hover:bg-white hover:text-black'>D! UK</button>
        <button  className='bg-gray-800   font-semibold mx-2  text-gray-300 text-[15px] rounded-lg py-1 px-2 hover:bg-white hover:text-black'>D! Ireland</button>
        <button  className='bg-gray-800   font-semibold mx-2  text-gray-300 text-[15px] rounded-lg py-1 px-2 hover:bg-white hover:text-black'>D! Australia</button>
      </div>
      
    </div>
    {/* Right Content */}
   <div className="flex flex-wrap  w-[60%] overflow-y-auto hide-scrollbar ">
    <div className="flex flex-col gap-6">
      {latest.map((item, index) => (
        <div
          key={index}
          className="h-[60%] flex w-full  border-gray-300  overflow-hidden "
        >
          {/* Image Section */}
          <div className="w-[50%]">
            <img src={item.img} alt={item.title} className="w-full h-auto object-contain transition delay-150 duration-300   ease-in-out hover:-translate-y-1 hover:scale-110 " />
          </div>

          {/* Text Section */}
          <div className="w-[50%] p-4 flex flex-col">
        <div className="flex flex-wrap items-center gap-2 mt-5">
  {item.tags.map((tag, index) => (
    <button
      key={index}
      className="bg-gray-800 font-semibold text-gray-300 text-[15px] rounded-lg py-1 px-2 hover:bg-white hover:text-black"
    >
      {tag}
    </button>
  ))}
  <p className="text-sm text-white">{item.date}</p>
</div>

           
            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
     
    </div>
  </div>
</section>
    </div>
  )
}

export default Latest
