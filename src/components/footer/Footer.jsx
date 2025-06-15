function Footer() {
  return (
   <div className="bg-black">
     <footer className="bg-[#ff6442] p-10 text-black rounded-t-3xl">
      <div className="flex flex-col md:flex-row justify-between">
        
        {/* Left Section */}
        <div>
          <h1 className="text-4xl font-black leading-none mb-4">
            DESIGN <br /> DECLARES
          </h1>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col space-y-2 mb-4 md:mb-0">
          <a
            href="#contact"
            className="hover:underline transition-all duration-300"
          >
            Contact
          </a>
          <a
            href="#instagram"
            className="hover:underline transition-all duration-300"
          >
            Instagram
          </a>
          <a
            href="#linkedin"
            className="hover:underline transition-all duration-300"
          >
            LinkedIn
          </a>
          <a
            href="#privacy"
            className="hover:underline transition-all duration-300"
          >
            Privacy Policy
          </a>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="font-semibold mb-4">
            Sign up to the D! Newsletter
          </h2>
          <input
            type="email"
            placeholder="Email:*"
            className="p-5 w-[80%] mb-4 border-black border bg-[#ff6442] text-black"
          />
          <div className="flex items-center mb-4">
            <input id="agree" type="checkbox" className="p-2 mr-2 w-10 h-10 bg-bg-[#ff6442]" />
            <label htmlFor="agree" className="text-sm">
              I would like to be added to the Design Declares! newsletter and
              receive further updates.
            </label>
          </div>
          <a
            href="#privacy"
            className="underline text-black mb-4 block text-sm"
          >
            Read our Privacy Policy
          </a>
          <button
            className="px-6 py-2 bg-gray-200 text-black font-semibold rounded-full hover:bg-gray-400 transition-all duration-300"
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-sm">
        <p>
          This website has been built following low-carbon principles of web
          development and hosted using serverless computing, by only allocating
          energy when needed and on demand.{" "}
          <a
            href="#learn"
            className="underline hover:text-gray-800 transition-all duration-300"
          >
            Learn more about our carbon footprint.
          </a>
        </p>
        <p className="mt-2">
          Empowered by{" "}
          <a
            href="#driftime"
            className="underline hover:text-gray-800 transition-all duration-300"
          >
            Driftime®
          </a>
        </p>
      </div>
    </footer>
   </div>
  )
}

export default Footer;
