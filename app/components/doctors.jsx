'use client'
import React from 'react'
import Paper from '@mui/material/Paper';
import {Box,Grid} from '@mui/material';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import ScienceIcon from '@mui/icons-material/Science';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const Doctors = () => {

    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };


  return (
    <div>
      <Box className="bg-white pb-[5rem]">
          <Grid container className='px-[1rem]'>
              <Grid item sm={12} md={6} lg={6}>

              </Grid>
              <Grid item sm={12} md={6} lg={6} className="flex justify-center items-center">
              </Grid>
          </Grid>
      </Box>
    </div>
  )
}

export default Doctors
