import React from 'react'
import logo_1 from '../../assets/images/logo_1.svg'
import logo_2 from '../../assets/images/logo_2.svg'
import logo_3 from '../../assets/images/logo_3.svg'
import logo_4 from '../../assets/images/logo_4.svg'
import logo_5 from '../../assets/images/logo_5.svg'
import logo_6 from '../../assets/images/logo_6.svg'
import AbbdTaiyo from '../../assets/images/Abb-d Taiyo.webp'
import AlexieSommer from '../../assets/images/Alexie Sommer.webp'
import AurelieLionet from '../../assets/images/Aurelie Lionet.webp'
import JoBarnard from '../../assets/images/Jo Barnard.webp'
const About = () => {

 const imageUrls = [
  { img: logo_1 },
  { img: logo_2 },
  { img: logo_3 },
  { img: logo_4 },
  { img: logo_5 },
  { img: logo_6 }
];

const imageData=[
  {
    img:AbbdTaiyo,
    name:'Abb-d Taiyo',
    description:'Driftime®'
  },
   {
    img:AlexieSommer,
    name:'Alexie Sommer',
    description:'URGE Collective'
  },
   {
    img:AurelieLionet,
    name:'Aurelie Lionet',
    description:'Design for Life'
  },
   {
    img:JoBarnard,
    name:'Jo Barnard',
    description:'Morrama'
  }
]

  return (
    <div>
      <div className=' w-[100%] bg-black  text-[9vw] md:text-[9vw] leading-none  py-2 font-druk text-gray-300'>
             <h1 className='text-[70px] font-bold px-10'> D!</h1>
      </div>
      <section className="min-h-screen bg-black text-white px-4 ">
  <div className="h-[100vh] flex flex-col  md:flex-row  justify-between  space-y-10 ">
    
    {/* Left Title */}
    <div className="md:w-1/3 w-full mt-8">
      <h2 className="text-[30px] mt-5  ">About Design Declares</h2>
    </div>

 
    {/* Right Content */}
<div className="w-full md:w-1/2 overflow-y-auto max-h-screen hide-scrollbar pr-4 space-y-6">
  <p className="w-full text-gray-200 leading-none text-[50px]">
    Climate breakdown has begun. And business as usual is not an option.
  </p>
  <p className='w-full text-gray-200 leading-none text-[20px]'>
    That’s why we started Design Declares.
  </p>
  <p className='w-full text-gray-200 leading-7 text-[17px]'>
    Inspired by a global declaration movement sounding the alarm in industries everywhere, we’re an industry-recognised initiative representing the fears, hopes and commitment to action of a growing group of designers, design studios, agencies and institutions.
  </p>
  {/* Donation Buttons */}
  <div className="flex flex-wrap gap-4 text-[21px]">
    <button className="bg-white text-black font-semibold py-3 px-6 rounded-full hover:bg-orange-600 transition">
      See Global Declarations
    </button>
  </div>
    <div className='w-full flex gap-5'>
      <div className='w-[50%]'>
            <p>Together, we sit at the very beginning of the creative process. The tools we use and the choices we make can influence society’s behaviour, change economies and challenge everything that’s come before.</p>
      </div>
        <div  className='w-[50%]' >
<p>Because design, whether it’s a product, a piece of packaging or an exhibition space, has impact. It’s up to us whether that impact is harmful or healing. We’re glad you’re here. Let’s get to work.

</p>
        </div>
    </div>


 <div className="flex flex-wrap gap-4 text-[21px]">
    <button className="bg-white text-black font-semibold py-3 px-6 rounded-full hover:bg-orange-600 transition">
      Declare Emergency Now
    </button>
  </div>
<div className='w-full flex gap-5'>
  {/* Left List */}
  <div className='w-[50%]'>
    <ul className='list-disc list-outside pl-5 flex flex-col gap-2'>
      <li>Design Declares is free.</li>
      <li>‘Design’ to us means industrial, digital, graphic, communication and service design.</li>
      <li>Design Declares offers support to all its signatories through shared best practice, resources and insights, all found in the Toolkit.</li>
      <li>Our signatories use the clarity of the 8 Acts of Emergency as a way to start meaningful conversations and actions in collaboration with colleagues, collaborators and clients.</li>
    </ul>
  </div>

  {/* Right List */}
  <div className='w-[50%]'>
    <ul className='list-disc list-outside pl-5 flex flex-col gap-2'>
      <li>We welcome declarations from companies with an office and/or employing at least one full-time designer, and from practising freelance designers who are registered as self-employed in the UK. All signatories will be named and published on this site.</li>
      <li>As a collective voice, we will liaise with other industry organisations and networks, constructively engaging with government, clients and design media.</li>
    </ul>
  </div>
</div>



</div>


  </div>
</section>

<section className="min-h-screen bg-black text-white px-4 ">
  <div className="h-[100vh] flex flex-col  md:flex-row  justify-between  space-y-10 ">
    
    {/* Left Title */}
    <div className="md:w-1/3 w-full mt-8">
      <h2 className="text-[30px] mt-5  ">Global Partnerships</h2>
    </div>

 
    {/* Right Content */}
<div className="w-full md:w-1/2 hide-scrollbar pr-4 space-y-6">
  <p className='text-[25px] font-semibold'>We invite our colleagues from across the design industry to join us in declaring an emergency, and starting to take urgent action.*</p>
    <div className='flex flex-col gap-5'>
      <div className='w-full flex gap-3'>
          <p className='text-[20px] w-[50%]'>The acts of emergency above are the first (big) steps. As we all commit to this work, we must also commit to doing it in a way that is genuinely inclusive and equitable.</p>
          <p className='text-[20px] w-[50%]'>*We are actively seeking partnerships to expand Design Declares around the world. If that sounds like something you’re interested in, please get in touch.</p>
      </div>
      <div className='w-full flex gap-3'>
          <p className='text-[20px] w-[50%]'>It doesn’t matter where on the journey you are. What matters is that you’re here, and you’re ready to do the work. Because there is no design on a dead planet.</p>
          <p className='text-[20px] w-[50%]'>
              <p>Join our list of global partners...</p>
              <div className='flex gap-2 mt-5'>
              <a href="" className='underline hover:text-orange-600'>UK,</a>
              <a href="" className='underline hover:text-orange-600'>Ireland,</a>
              <a href="" className='underline hover:text-orange-600'>Brazil,</a>
              <a href="" className='underline hover:text-orange-600'>Australia</a>
              </div>
              
           
          </p>
      </div>

      <div>

      </div>
    </div>
    <div className="flex flex-wrap gap-4 text-[21px]">
    <button className="bg-white text-black font-semibold py-3 px-6 rounded-full hover:bg-orange-600 transition">
      Get in Touch
    </button>
  </div>

</div>


  </div>
</section>

{/* ---------------- */}
<section className="min-h-screen bg-black text-white px-4 ">
  <div className="h-[100vh] flex flex-col  md:flex-row  justify-between  space-y-10 ">
    
    {/* Left Title */}
    <div className="md:w-1/3 w-full mt-8">
      <h2 className="text-[30px] mt-5  ">The Designers Behind Design Declares UK</h2>
    </div>

 
    {/* Right Content */}
      <div className="w-full md:w-1/2 hide-scrollbar pr-4 space-y-6">
      <p className='text-[20px]'>Inspired by the global emergency declaration movement demanding accountability and action across industries, Design Declares is the initiative of a multidisciplinary group of design professionals and agencies who all believe in the power of design to change things.</p>
      <div className="grid grid-cols-2 gap-10">
     {imageUrls.map((url, index) => (
    <img
      key={index}
      src={url.img}
      alt={`Image ${index + 1}`}
      className="w-[40%] h-auto object-cover rounded m-3"
    />
  ))}
</div>

      </div>

  </div>
</section>


{/* ----------------- */}

<section className="min-h-screen bg-black text-white px-4 ">
  <div className="h-[100vh] flex flex-col  md:flex-row  justify-between  space-y-10 ">
    
    {/* Left Title */}
    <div className="md:w-1/3 w-full mt-8">
      <h2 className="text-[30px] mt-5  ">Steering Group</h2>
    </div>
    {/* Right Content */}
   <div className="flex flex-wrap gap-6">
      {imageData.map((item, index) => (
        <div key={index} className="flex flex-col w-[180px] gap-2">
          <img src={item.img} alt={item.name} className="w-50 h-50 object-contain mb-3" />
          <h3 className="font-semibold text-white">{item.name}</h3>
          <p className="text-sm text-gray-500">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
    </div>
  )
}

export default About
