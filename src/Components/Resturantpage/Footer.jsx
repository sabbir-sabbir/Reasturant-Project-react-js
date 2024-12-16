import React from "react";


const Footer = () => {
  return (
    <footer>
      <hr />
      <section className="w-full container mx-auto ">
        <div className="grid grid-cols-3 gap-24 p-8">
          <div className="flex flex-col space-y-2">
            <div>
              <h1 className="text-HB font-lexend font-bold text-[18px]">
                About
              </h1>
            </div>
            <div>
              <p className="text-letter text-[12px]">About MyFeedback</p>
            </div>
            <div>
              <p className="text-letter text-[12px]">Investor Relations</p>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <div>
              <h1 className="text-HB font-lexend font-bold text-[18px]">
                MyFeedback
              </h1>
            </div>
            <div>
              <a className='text-letter text-[12px]' href="#">MyFeedback for business</a>
            </div>
            <div>
              <a className='text-letter text-[12px]' href="#">Collections</a>
            </div>
            <div>
              <a className='text-letter text-[12px]' href="#">Talk</a>
            </div>
            <div>
              <a className='text-letter text-[12px]' href="#">events</a>
            </div>
            <div>
              <a className='text-letter text-[12px]' href="#">MyFeedback blog</a>
            </div>
            <div>
              <a className='text-letter text-[12px]' href="#">Support</a>
            </div>
            <div>
              <a className='text-letter text-[12px]' href="#">Developers</a>
            </div>
            
          </div>

          <div className='flex flex-col space-y-4'>
            <div>
                <div className='mb-1 ml-5'>
                    <h1 className='text-HB font-lexend font-bold text-[18px]'>Languages</h1>
                </div>
              <select  className=' px-5 outline-none' >
                <option  value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="Frence">Frence</option>
              </select>
            </div>

            <div>
            <div className='mb-1 ml-5'>
                    <h1 className='text-HB font-lexend font-bold text-[18px]'>Countries</h1>
                </div>
            <select className=' px-5 outline-none'>
                <option value="Singapour">Singapour</option>
                <option value="France">France</option>
                <option value="Spain">spain</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
