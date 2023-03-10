import React from 'react';
import { FormControl,InputLabel,Input, FormHelperText, TextField,Button} from '@mui/material';


const RegistrationForm = () => {
  return (
    <div className='bg-[white] w-[22rem] h-[24rem] rounded-md py-[3rem] px-[2rem]'>
      <FormControl fullWidth color=''>
        <TextField
          required
          id="outlined-required"
          label="Full Name"
          type="text"
          autoComplete="current-password"
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          type="text"
          autoComplete="current-password"
          className='my-2'
        />
        <TextField
          required
          id="outlined-required"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button variant="contained" className='mt-2 w-full flex font-sans bg-[#252849] rounded-md h-[3rem] hover:bg-gray-dark shadow-none'>register now</Button>
      </FormControl>
    </div>
  )
}

export default RegistrationForm
