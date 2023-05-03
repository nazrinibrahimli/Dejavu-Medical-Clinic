import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import landing from 'public/static/cooperation.jpeg'
import AddIcCallSharpIcon from '@mui/icons-material/AddIcCallSharp';
import RegistrationForm from './registrationForm';

const Register = () => {
  return (
    <div className='mt-[4rem] lg:mx-[8rem] py-[5rem] rounded-xl  bg-main mb-[4rem] '>
        <h1 className='text-center font-bold text-blue mt-[3rem]'>Book your <span className='text-green'>first appointment</span> today with our professional doctors.</h1>
        <p className='text-center text-gray mt-[1rem]'>Get the care you and your family deserve</p>
        <div className='flex justify-center'>
        <Button variant="contained" className='px-[2rem] mt-[2rem] font-sans bg-gradient-to-r from-[#00d4ff] to-[#020024]  text-sm   rounded-3xl mr-[1rem] h-[3rem] hover:bg-gray-dark '>Let's get started</Button>
        </div>
        </div>

  )
}

export default Register
