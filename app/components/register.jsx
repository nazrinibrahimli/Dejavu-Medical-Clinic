import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import landing from 'public/static/cooperation.jpeg'
import AddIcCallSharpIcon from '@mui/icons-material/AddIcCallSharp';
import RegistrationForm from './registrationForm';
const register = () => {
  return (
    <div className='relative overflow-hidden  mt-[4rem] lg:mx-[8rem] py-[4rem] mb-[8rem] rounded-xl  bg-[#4f45b8] '>
       <Box>
         <Grid container>
           <Grid item md={12} lg={6} className="flex justify-center items-center">
           <div className='z-40 mx-[4rem] '>
              <div className='w-[13rem] h-[13rem] bg-gray-light rounded-full absolute top-[-3.2rem] left-[-120px] z-20'></div>
              <div className='w-[13rem] h-[13rem] bg-blue rounded-full absolute top-[-7rem] left-[-40px] z-10'></div>
              <h1 className='text-center lg:w-[23rem] md:w-[16rem] font-medium text-white my-[3rem]'>We are here to help you grow your business</h1>
            </div>
           </Grid>
           <Grid item md={12} lg={6} className="mx-auto flex justify-center items-center"  >
              <RegistrationForm/>
           </Grid>
         </Grid>
       </Box> 
    </div>
  )
}

export default register
