import React, {useRef} from 'react'
import Bg1 from '../../assets/bg1Flip.jpg'
import { Link } from 'react-router-dom'


const LandingCTA = () => {

  return (
    <div className='h-[600px] md:h-[100vh] relative w-full flex justify-center items-center bg-cover bg-black bg-no-repeat bg-center' style={{ backgroundImage: `url("${Bg1}")` }}>
      {/* <div className='absolute h-[500px] md:h-[85vh] w-full top-[-25%] hidden md:flex justify-center items-center bg-[red]'>
        <div className='h-full w-[90%] grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-4'>
          <div class="grid gap-4">
            <div>
              <img class="h-auto max-w-full rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg" src="https://images.pexels.com/photos/12899150/pexels-photo-12899150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg" src="https://images.pexels.com/photos/7693756/pexels-photo-7693756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img class="h-auto max-w-full rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg" src="https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg" src="https://images.pexels.com/photos/7691743/pexels-photo-7691743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
            </div>
            
          </div>
          <div class="grid gap-4">
            <div>
              <img class="h-auto max-w-full rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg" src="https://images.pexels.com/photos/6930426/pexels-photo-6930426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
            </div>
            
          </div>
          <div class="grid gap-4">
            <div>
              <img class="h-auto max-w-full rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg" src="https://images.pexels.com/photos/7698806/pexels-photo-7698806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg" src="https://images.pexels.com/photos/7693694/pexels-photo-7693694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
            </div>
          </div>

        </div>
      </div> */}
      <div className='h-full md:h-[60%] w-[90%] flex justify-center items-center md:items-center'>
        <div className='h-[85%] md:h-[50%] w-[90%] md:w-[85%] px-[20px] md:px-[45px] bg-[rgba(128,128,128,0.2)] shadow-lg backdrop-blur-[5px] rounded-[12px] flex justify-evenly items-center flex-col' >
          <h4 className='secondaryTitle text-white text-center md:text-left'>Access Your Account Here</h4>
          <p className='paragraph text-center px-[0] md:px-[25px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum nobis quaerat facere quae obcaecati amet quia, tenetur quo necessitatibus provident est recusandae, incidunt odit.</p>
          <Link to="/login" state={{current: "signup"}} className='primary-btn flex justify-center items-center'>Get Started</Link>
        </div>
      </div>

    </div>
  )
}

export default LandingCTA
