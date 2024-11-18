import blogImg from './assets/blogImage.jpg'
import userImg from './assets/userpic.png'

const App = () => {
  return (

    <>
      {/* main wrapper */}
      <section className='bg-primary w-full h-dvh flex justify-center items-center'>

        {/* blog-card container */}
        <section className='relative group'>

          <section className='bg-white p-5 border-2 border-black rounded-2xl flex flex-col relative z-10 xs:w-72 sm:w-96 xs:h-full'>

          {/* content-top */}
          <div className='rounded-lg'>
            <img src={blogImg} alt="Blog Image" className='w-full bg-cover bg-center object-cover rounded-lg xs:h-24 sm:h-52' />
          </div>

          {/* content-bottom */}
          <div className='mt-6'>
            <button className='bg-primary font-FigTree font-extrabold sm:w-28 xs:w-20 py-2 rounded-lg'>Learning</button>

            <p className='font-medium font-FigTree mt-3 xs:text-[15px]'>Published 21 Dec 2023</p>

            <h1 className='font-bold text-heading mt-3 group-hover:text-primary transition-all duration-300 xs:text-[1.2rem] sm:text-2xl '>HTML & CSS foundations</h1>

            <p className='text-paraText mt-3 font-FigTree font-medium xs:text-[15px]'>These languages are the backbone of every website, defining structure, content, and presentation.</p>

            <div className='flex items-center mt-6'>
              <img src={userImg} alt="User Image" className='w-12 h-12 rounded-full mr-3' />
              <p className='font-extrabold font-FigTree'>Greg Hooper</p>
            </div>

          </div>
          </section>

          {/* behind-div */}
          <div className='absolute top-2 left-2 bg-black rounded-lg sm:w-[24rem] sm:h-[34rem] transition-all duration-300 group-hover:left-4 xs:w-[18rem] xs:h-[27rem]'></div>

        </section>
      </section>
    
    </>

  )
}

export default App