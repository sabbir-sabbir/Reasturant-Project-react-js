import React from 'react'

const Footer = () => {
  return (
    <footer>
        <hr />
        <section className='w-full container mx-auto '>
            <div className='grid grid-cols-3 gap-24 p-8'>
                <div className='flex flex-col space-y-4'>
                  <div>
                    <h1 className='text-HB font-lexend font-bold text-[18px]'>About</h1>
                  </div>
                  <div>
                    <p className='text-letter text-[12px]'>About MyFeedback</p>
                  </div>
                  <div>
                    <p className='text-letter text-[12px]'>Investor Relations</p>
                  </div>
                </div>
               
                <div>

                </div>
                <div>

                </div>

            </div>

        </section>
    </footer>
  )
}

export default Footer