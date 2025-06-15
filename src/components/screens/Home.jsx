import actsOfEmergency from '../../assets/json data/8_acts_of_emergency.json'

import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import newsletter from '../../assets/images/Newsletter.webp'
export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 900); // 2.5 sec delay
    
  }, []);

  return (
    <>
      {showSplash ? (
        // Splash screen with D!
        <div className=" h-screen bg-black text-white">
          <h1 className="text-[9vw] md:text-[9vw] leading-none font-extrabold  ml-5 font-druk text-gray-300 fade-in-out">D!</h1>
           {/* {setShowSplash(false)}  */}
        </div>
       
      ) : (
        // Actual Home Page Content
        <>
        <section className="min-h-screen flex flex-col md:flex-row bg-black text-white p-4 transition-opacity duration-1000 ease-in ">
          {/* Left Side - Large Text */}
          <div className="flex flex-col md:w-1/2 items-center md:items-start mt-0 animate-fade-in">
            <h1 className="text-[9vw] md:text-[9vw] leading-none font-extrabold font-druk">
              <span className="block text-gray-300">DESIGN</span>
              <span className="block text-gray-300">DECLARES</span>
              <span className="block text-[#F04C23]">UK</span>
            </h1>
          </div>

          {/* Right Side - Paragraph */}
          <div className="md:w-1/2 md:mt-0 flex justify-center md:justify-end animate-fade-in">
            <p className="max-w-lg text-200 text-left text-gray-200 leading-relaxed pt-5">
              Design Declares is a growing group of designers, design studios,
              agencies and institutions here to declare a climate and ecological
              emergency. As part of the global declaration movement, we commit to
              harnessing the tools of our industry to reimagine, rebuild and heal
              our world.
            </p>
          </div>
          
        </section>


        <section className="min-h-screen bg-black text-white flex flex-col md:flex-row px-6 py-16">
  {/* Left Side */}
  <div className="md:w-1/2 mb-10 md:mb-0">
    <h2 className="text-3xl md:text-4xl font-bold text-white">This is Breakdown</h2>
  </div>

  {/* Right Side */}
  <div className="md:w-1/2 space-y-6">
    <p className=" text-[3vw] font-semibold  text-white leading-snug">
      The science is settled. We are in an emergency of climate and nature.
      The world is past breaking point; the breakdown has begun...
    </p>

    {/* Accordion Items */}
    <div className="space-y-2  font-semibold ">
      {["The Role of Design", "Time for Change", "Act with Urgency"].map((title, idx) => (
        <details key={idx} className="group border-t border-gray-600 pt-4 ">
          <summary className="cursor-pointer flex justify-between items-center text-2xl font-medium text-white">
            {title}
            <ChevronDown className="h-5 w-5 transform transition-transform group-open:rotate-180" />
          </summary>
          <div className="mt-2 text-gray-300">
            <p>This section contains expandable content related to "{title}". You can replace this with real text.</p>
          </div>
        </details>
      ))}
    </div>

    {/* Button */}
    <div className="pt-6">
      <button className="bg-white text-black text-base font-medium px-6 py-2 rounded-full hover:bg-gray-200 transition">
        View our D! Intro Video
      </button>
    </div>
  </div>
</section>


<section className="min-h-screen bg-black text-white px-4 ">
  <div className="h-[100vh] flex flex-col items-center md:flex-row  justify-between  space-y-10 ">
    
    {/* Left Title */}
    <div className="md:w-1/3 w-full">
      <h2 className="text-3xl md:text-4xl font-bold">Donate to D!</h2>
    </div>

    {/* Right Content */}
    <div className=" w-full  flex flex-col justify-center space-y-6  md:w-1/2">
      <p className="w-[100%] text-gray-200 leading-relaxed text-[21px]">
        Design Declares is a CIC and would not exist without our dedicated
        team of co-steers, volunteers, and our passionate community working
        towards change in the creative industry. Your support can go a long
        way, and helps us too continue the valuable work needed in tackling
        the climate crises. If you believe in the work we do, please consider a
        small donation to help us on our journey for a more equitable and just
        planet.
      </p>

      {/* Donation Buttons */}
      <div className="flex flex-wrap gap-4 text-[21px]">
        <button className="bg-white text-black font-semibold py-3 px-6 rounded-full hover:bg-orange-600 transition">Donate £10</button>
        <button className="bg-white text-black font-semibold py-3 px-6 rounded-full hover:bg-orange-600 transition">Donate £20</button>
        <button className="bg-white text-black font-semibold py-3 px-6 rounded-full hover:bg-orange-600 transition">Donate £50</button>
      </div>
    </div>

  </div>
</section>


<section className="w-full bg-black text-white">
  <div className="">
    <div className="flex flex-col md:flex-row justify-between  gap-10 w-full">
      
      {/* Left Side: Heading (30%) */}
      <div className="w-full md:basis-[30%]">
        <h2 className="text-3xl font-bold">8 Acts of Emergency</h2>
      </div>

      {/* Right Side: Description + List (70%) */}
      <div className="md:basis-[60%] space-y-6 md:ml-auto px-2">
        
        {/* Description */}
        <p className="text-lg text-gray-300">
          What does it take to Declare? It’s accepting we are in an emergency of climate and nature,
          and a commitment to do something about it. Here are eight places to start:
        </p>

        {/* List */}
        <div className="space-y-4">
          {actsOfEmergency.map((act) => (
            <div key={act.sno} className="bg-[#E5E5E5] text-black border border-black">
              {/* Number and Title Row */}
              <div className="grid grid-cols-[50px_1fr]">
                <div className="text-4xl font-light flex items-center justify-center border-r border-black">
                  {act.sno}
                </div>
                <div className="text-4xl font-normal px-4 py-2">{act.title}</div>
              </div>

              {/* Description */}
              <div className="px-4 py-4 text-gray-800 text-base leading-relaxed border-t border-black">
                {act.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


 <div className="min-h-screen bg-black text-white flex flex-col md:flex-row px-6 py-16" id="declare">
  {/* Left Side */}
  <div className="md:w-1/2 mb-10 md:mb-0">
    <h2 className="text-[25px] md:text-4xl font-semibold text-white">Declare Emergency Now</h2>
  </div>

  {/* Right Side */}
  <div className="md:w-1/2 space-y-6">
    <p className="text-[25px]  text-white leading-snug">
     Design Declares is open to individuals and institutions working in industrial, digital, graphic, communication and service design. To declare here, you must be a company with an office in the UK employing at least one full-time designer. We also welcome declarations from practising freelance designers who are registered as self-employed in the UK, and global supporters from other countries. All declarations will be named and published on this site.
    </p>

{/* Form Container */}
<div className="space-y-6 font-semibold border border-white p-6 rounded-lg w-full max-w-3xl mx-auto">
  {/* Form Title */}
  <h3 className="text-[40px]  font-bold mb-4">I am Declaring Emergency</h3>

  {/* Checkbox Grid - 2 Columns */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {[
      "As a Business",
      "As an Individual",
      "As a Public Institution",
      "As a Team or Department",
    ].map((label, idx) => (
      <label key={idx} className="flex items-center gap-3">
        <input
          type="checkbox"
          className="w-5 h-5 border border-white bg-transparent rounded-sm"
        />
        <span>{label}</span>
      </label>
    ))}
  </div>

  {/* Input Fields */}
  <div className="space-y-4 pt-6">
    {[
      { label: "Business Name", type: "text", required: true },
      { label: "Team Name", type: "text", required: true },
      { label: "Website", type: "text", required: true },
      { label: "Country", type: "text", required: true },
      { label: "Discipline", type: "text", required: true },
      { label: "Email", type: "email", required: true },
    ].map((field, i) => (
      <div key={i}>
        <p>
          {field.label} {field.required && <span className="text-red-500">*</span>}
        </p>
        <input
          type={field.type}
          required={field.required}
          className="w-full p-2 border border-gray-400 bg-black text-white rounded"
        />
      </div>
    ))}

    {/* Text Area */}
    <div>
      <p>Message (optional)</p>
      <textarea
        rows="4"
        placeholder="Why are you declaring?"
        className="w-full p-2 border border-gray-400 bg-black text-white rounded"
      ></textarea>
    </div>
  </div>

  {/* Final Checkboxes One by One */}
  <div className="space-y-4 pt-6">
    {[
      "I consent for my data to be used for the purpose of the Declaration",
      "I would like to be added to the Design Declares! newsletter and receive further updates.",
    ].map((text, i) => (
      <label key={i} className="flex items-start gap-3">
        <input
          type="checkbox"
          className="w-5 h-5 border border-white bg-transparent mt-1 rounded-sm"
        />
        <span>{text}</span>
      </label>
    ))}
  </div>

  {/* Submit Button */}
  <div className="pt-4">
    <button className="bg-white hover:bg-[#c63b18] transition duration-300 text-black font-bold py-5 px-7 rounded-full">
      Declare Emergency Now
    </button>
  </div>
</div>



  </div>
</div>

<section className="min-h-screen bg-black text-white flex flex-col md:flex-row px-6 py-16">
  {/* Left Side Heading */}
  <div className="md:w-1/2 mb-10 md:mb-0">
    <h2 className="text-4xl font-bold text-white">Latest</h2>
  </div>

  {/* Right Side Content */}
  <div className="md:w-1/2 space-y-12 flex flex-col justify-between">
    
    <div className="space-y-12">
      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column: Event Meta + Title */}
        <div className="space-y-2">
          <p className="text-sm text-gray-400">Events — D! UK — 24.04.2025, 03:30 PM</p>
          <h3 className="text-xl font-bold leading-snug">
            SD4P Collective: How can Service Design drive meaningful sustainability impact
          </h3>
        </div>

        {/* Right Column: Description + Link */}
        <div className="flex flex-col justify-between space-y-2">
          <p className="text-gray-300">
            Recap: SD4P Collective working session – 28th March 2025
          </p>
          <a href="#" className="text-orange-500 underline self-start">
            Read Story
          </a>
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column: Event Meta + Title */}
        <div className="space-y-2">
          <p className="text-sm text-gray-400">Events — D! UK — 06.12.2024, 02:30 PM</p>
          <h3 className="text-xl font-bold leading-snug">
            Designing Tomorrow: Speculative Thinking Shapes Our Present
          </h3>
        </div>

        {/* Right Column: Description + Link */}
        <div className="flex flex-col justify-between space-y-2">
          <p className="text-gray-300">
            Design Declares' November Event Challenges Perspectives on Sustainability and Innovation
          </p>
          <a href="#" className="text-orange-500 underline self-start">
            Read Story
          </a>
        </div>
      </div>
       {/* CTA Button at Bottom */}
    <div className="pt-6 text-left">
      <button className="text-black text-[20px] font-bold bg-white   py-2 px-6 rounded-full hover:bg-orange-600 transition">
        See All the Latest
      </button>
    </div>
    </div>

   

  </div>
</section>
 <section className="min-h-screen w-full bg-black text-white flex flex-col md:flex-row px-6 py-6">
  {/* Left Side */}
  <div className="w-[40%]">
    <h2 className="text-[20px] font-bold md:text-4xl  text-white">The Design Declares Newsletter and Toolkit</h2>
  </div>

{/* Right Side */}
<div className="w-[60%] h-[800px] bg-black text-white p-6 flex flex-col space-y-4 rounded-lg  border-white overflow-y-auto  hide-scrollbar">

  {/* Image Section - 50% */}
  <div className="flex-1 bg-gray-700 flex items-center justify-center rounded">
    <span className="text-gray-300">
      <img src={newsletter} alt="" />
    </span>
  </div>

  {/* Description - 20% */}
  <div className="h-[20%]">
    <p className="text-[15px] text-gray-300">
      Subscribe to the Design Declares UK newsletter to receive the latest news and updates. By signing up you will also gain access to The Design Declares Toolkit, a live and evolving Notion site co-created with our community. It is filled with the latest resources and methods to help you on your journey to climate-positive design.

Every signatory to Design Declares will receive an access link to the Toolkit. If you are unable to declare emergency quite yet, you can still access the Toolkit - just register below.
    </p>
  </div>

  {/* Input + Checkbox + Button - Remaining Space */}
  <div className="flex flex-col gap-3">
    <input
      type="email"
      placeholder="Email: *"
      required
      className="w-full p-5 bg-transparent border border-white text-white rounded placeholder:text-[20px] placeholder:text-gray-400"
    />
    
    <label className="flex items-center gap-2 text-sm">
      <input
        type="checkbox"
        className="accent-orange-500 w-7 h-7 my-2 bg-transparent border border-white"
      />
      I agree to receive updates.
    </label>

    <button className=" bg-white text-black w-[20%] rounded-2xl mt-5 px-5 py-1 text-[25px] font-semibold hover:bg-orange-600">
      Subscribe
    </button>
  </div>
</div>

</section>






        </>
        
      )}
    </>
  );
}
