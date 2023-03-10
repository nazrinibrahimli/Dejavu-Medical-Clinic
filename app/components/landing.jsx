'use client'
import React from 'react'
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Image from 'next/image';
import landing from 'public/static/landing.jpg'
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const LandingPage = () => {
  return (
    <div className='px-[4rem] py-[3rem] bg-[#f4feff]  h-[47rem] relative overflow-hidden mb-[8rem] '>
      <Box>
        <Grid container>
          <Grid item sm={12} lg={6}>
          <h1 className='lg:w-[20rem] font-semibold text-[#252849] '>We Are Ready to  <span className='text-light-blue'>Help Your Health </span>Problems</h1>
          <p className=' w-[26rem] my-[3rem]'>We specialize in destkop and mobile applications, CEO, marketing, AI solutions, cybersecutity.</p>
          <Button variant="contained" className='font-sans bg-gradient-to-r from-[#00d4ff] to-[#020024]  text-sm   rounded-3xl mr-[1rem] h-[3rem] hover:bg-gray-dark'>Try Free Consultation</Button>
          <div className='rounded-xl bg-[#00000] pt-auto'>
            <div className='flex my-[2rem]'>
            <div className='mr-[1rem] '>
            <h1 className='text-blue'>180<span className='text-green'>+</span></h1>
            <p className='text-gray'>Active Doctor</p>
            </div>
            <div>
            <h1 className='text-blue'>12K<span className='text-green'>+</span></h1>
            <p className='text-gray'>Active User</p>
            </div>
            <div className='ml-[1rem]'>
            <h1 className='text-blue'>20<span className='text-green'>+</span></h1>
            <p className='text-gray'>Pharmacy</p>
            </div>
            </div>
          </div> 
          </Grid>
          <Grid item sm={12} lg={6} sx={{display:"flex"}}>
          <div className="z-20 absolute right-[9rem] w-[20rem] h-[33rem] rounded-t-full  border-[1rem] border-[white] rounded-xl bg-cover bg-[url('/static/doctor-1.jpg')] "></div>
          <div className="z-10 absolute right-[-2rem] w-[38rem] h-[38rem] rounded-tl-3xl bg-cover bg-[url('/static/tool.jpg')] "></div>
          </Grid>
        </Grid>
      </Box>

    </div>
  )
}

export default LandingPage
