import React from 'react'
import Image from 'next/image';
import cooperation from 'public/static/cooperation.jpeg';
import slack from 'public/static/slack.png';
import google from 'public/static/google.png';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import SingleDoctor from './singleDoctor';
import { useState } from 'react';


const MeetDoctors = () => {
    const listOfDoctors=[
        {title:"Dr.Rachel Green",image:"/static/dr-1.jpg",description: "Chief Physician of Dejavu Polyclinic, MScFunctional diagnostics doctor"},
        {title:"Dr.Hasan Oruj",image:"/static/dr.jpg",description: "Chief Physician of Dejavu Dental Dentist (therapist, pediatric dentist"},
        {title:"Dr.Drake Ramoray",image:"/static/dr-2.jpg",description: "Leading specialist for preventive medical check-ups of the Occupational Health Department"},
        {title:"Dr.Anna Orwell",image:"/static/dr-3.jpg",description: "Leading specialist for preventive medical check-ups"},
        {title:"Dr.Steve Joss",image:"/static/doctor-2.jpg",description: "Leading specialist for preventive medical check-ups"},
        {title:"Dr.Pheobe June",image:"/static/doctor-3.jpg",description: "Leading specialist for preventive medical check-ups"},
        {title:"Dr.Monica Ramo",image:"/static/dr-4.jpg",description: "Leading specialist for preventive medical check-ups"},
        ];


 const l=listOfDoctors.length-1;       

const [count, setCount]=useState(0)



function Next(){

    setCount(prevCount=>prevCount+1)

}

function Prev(){

    setCount(prevCount=>prevCount-1 )
   
}




const doctor = listOfDoctors.map((d)=>{return <SingleDoctor key={index} title={d.title} image={d.image} description={d.description}/>      
}  )


  return (
    <div className='rounded-xl mx-[3rem] pb-[3rem]'>
    <Box sx={{ flexGrow: 1 }} className=" mx-[2rem] rounded-xl  ">
      <h1 className='text-center pt-[5rem] font-semibold text-[#252849]'>Meet Our <span className='text-light-blue'>Specialized Doctors</span> </h1>
      <Grid container spacing={2} className="py-[3.5rem]">
          {doctor[count]}     
      </Grid>
      <div className="flex justify-center">
          {count}
          {l}
      <button className='actionButton w-[80px]  h-[40px] mx-[0.5rem] font-sans bg-gradient-to-r from-[#00d4ff] to-[#020024]  text-sm text-white   rounded-3xl mr-[1rem] h-[3rem]' onClick={Prev}>prev</button>
      <button  className='actionButton w-[80px] h-[40px] mx-[0.5rem] font-sans bg-gradient-to-r from-[#00d4ff] to-[#020024]  text-sm text-white   rounded-3xl mr-[1rem] h-[3rem]' onClick={Next}>next</button>
      </div>
      </Box>
   </div>
  )
}

export default MeetDoctors
