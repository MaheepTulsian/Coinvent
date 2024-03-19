import React from 'react'

const EventDetails = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-5'>
    <div className='h-vh mx-5 p-10 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl'>
      
      <div className='w-full h-auto flex items-center justify-center'>
        <img src="https://source.unsplash.com/random/200x100" alt="" className='w-3/4 h-auto rounded-xl border-2 border-gray-300' />
      </div>

      <div className='my-10'>
        <h1 className='text-3xl text-white font-bold mb-2'>About</h1>
        <p className='text-lg text-[#F7FAFA]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, odit. Dolor optio deserunt quod illo modi eveniet odit officia facere, nihil mollitia nesciunt odio non neque ratione. Molestias, natus. Nesciunt?
        Dignissimos itaque quo, ratione incidunt et, quisquam nihil aperiam laborum perferendis optio, ducimus veniam suscipit laboriosam sit earum deleniti quod autem. Nemo blanditiis fugit sint. Fugit nulla mollitia ab quas!
        Magnam ipsa modi quisquam minus, sit consectetur id exercitationem neque aperiam labore inventore voluptatibus esse quae ea autem non provident cum eligendi accusamus optio saepe nemo iure necessitatibus maxime. Earum!</p>
      </div>

      <div className='my-10'>
        <h1 className='text-3xl text-white font-bold mb-2'>Market Analysis</h1>
        <p className='text-lg text-[#F7FAFA]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perspiciatis dicta nostrum vero alias cumque ipsum voluptates quisquam mollitia corrupti tempora labore saepe quo eligendi a, natus magnam blanditiis sapiente?
        Earum laudantium dolore sit aperiam necessitatibus commodi dicta, vero ratione qui rerum iste optio numquam enim, minus praesentium suscipit! Quis ab natus provident id quam vitae error dignissimos unde officiis.
        Laudantium numquam, itaque ducimus laborum quas pariatur ipsum quibusdam commodi deserunt neque, reprehenderit rerum? Consequatur sequi quasi a alias expedita ipsa ea, explicabo aspernatur consequuntur quibusdam dolores eveniet corrupti nostrum.</p>
      </div>

      <div className='my-10'>
        <h1 className='text-3xl text-white font-bold mb-2'>Token Details</h1>
        <hr />
        <div className='flex items-center justify-between m-2'>
          <div>
            <h3 className='text-lg text-[#8A9EBF] font-bold mb-2'>Token Supply</h3>
            <p className='text-sm text-[#F7FAFA]'>1000000</p>
          </div>
          <div>
            <h3 className='text-lg text-[#8A9EBF] font-bold mb-1'>Offering Price</h3>
            <p className='text-sm text-[#F7FAFA]'>300 per Token</p>
          </div>
        </div>
        <hr />
        <div className='flex items-center justify-between m-2'>
          <div>
            <h3 className='text-lg text-[#8A9EBF] font-bold mb-2'>Token Type</h3>
            <p className='text-sm text-[#F7FAFA]'>ERC-20</p>
          </div>
          <div>
            <h3 className='text-lg text-[#8A9EBF] font-bold mb-2'>Issue Date</h3>
            <p className='text-sm text-[#F7FAFA]'> February 25, 2023</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
    </div>
  )
}

export default EventDetails
