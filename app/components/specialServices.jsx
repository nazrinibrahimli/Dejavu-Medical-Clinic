import React from 'react'
import Paper from '@mui/material/Paper';
import {Box,Grid} from '@mui/material';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import ScienceIcon from '@mui/icons-material/Science';
const specialServices = () => {
  return (
    <div>
      <Box className="bg-white pb-[5rem]">
          <Grid container className='px-[1rem]'>
              <Grid item sm={12} md={6} lg={6} className="flex justify-center items-center">
              <div className="mt-[8rem] w-[25rem] h-[42rem] rounded-t-full  border-[1rem] border-green rounded-b-3xl bg-cover hover:bg-[url('/static/doctor-3.jpg')] bg-[url('/static/doctor-4.jpg')] "></div>
              </Grid>
              <Grid item sm={12} md={6} lg={6}>
              <h1 className='text-start sm:text-center  md:text-start pt-[5rem] font-semibold text-[#252849] sm:px-[4rem] md:px-[1rem]'>Our <span className='text-light-blue'>Special Services</span></h1>
              <p className='text-gray sm:text-center  md:text-start my-[2rem]  md:px-[1rem]  leading-loose text-base '>In times like today, your healt is very important, especially since the number of COVID-19 cases is increasing day by day, so we are ready to help you with your health consultation.</p>
              <Box>
              <Grid container className='sm:px-[4rem] md:px-[1rem]'>
                <Grid item sm={6} md={6} lg={6} className="mt-[2rem] pr-[1rem]">
                 <div className='bg-green w-[4rem] h-[4rem] rounded-2xl flex justify-center items-center'>
                     <CoronavirusIcon sx={{color:"white", fontSize: 50}}/>
                </div>   
                <h2 className='font-bold my-[1rem]'>COVID-19 Test</h2>
                <p className='text-gray leading-relaxed text-base'>Our spaces are designed with real people in mind. With the best modern tech and always-amazing hospitality, we're here to provide affordable, seamless care for the whole family.</p>
                </Grid>  
                <Grid item sm={6} md={6} lg={6} className="mt-[2rem] pr-[1rem]">
                <div className='bg-green w-[4rem] h-[4rem] rounded-2xl flex justify-center items-center'>
                     <MedicalServicesIcon sx={{color:"white", fontSize: 50}}/>
                </div>   
                <h2 className='font-bold my-[1rem]'>Herbal Supplement</h2>
                <p className='text-gray leading-relaxed text-base'>Our spaces are designed with real people in mind. With the best modern tech and always-amazing hospitality, we're here to provide affordable, seamless care for the whole family.</p>
                </Grid>  
                <Grid item sm={6} md={6} lg={6} className="mt-[2rem] pr-[1rem]">
                <div className='bg-green w-[4rem] h-[4rem] rounded-2xl flex justify-center items-center'>
                     <ScienceIcon sx={{color:"white", fontSize: 50}}/>
                </div>   
                <h2 className='font-bold my-[1rem]'>Laboratorium Test & Imaging</h2>
                <p className='text-gray leading-relaxed text-base'>Our spaces are designed with real people in mind. With the best modern tech and always-amazing hospitality, we're here to provide affordable, seamless care for the whole family.</p>
                </Grid>  
                <Grid item sm={6} md={6} lg={6} className="mt-[2rem] pr-[1rem]">
                <div className='bg-green w-[4rem] h-[4rem] rounded-2xl flex justify-center items-center'>
                     <Diversity1Icon sx={{color:"white", fontSize: 50}}/>
                </div>   
                <h2 className='font-bold my-[1rem]'>Individual & Family Care</h2>
                <p className='text-gray leading-relaxed text-base'>Our spaces are designed with real people in mind. With the best modern tech and always-amazing hospitality, we're here to provide affordable, seamless care for the whole family.</p>
                </Grid>  
              </Grid>   
              </Box>
              </Grid>
          </Grid>
      </Box>
    </div>
  )
}

export default specialServices
