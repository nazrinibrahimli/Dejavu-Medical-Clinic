import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MedicationIcon from '@mui/icons-material/Medication';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#f4feff",
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
  border: "0.5px solid gray"

}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  color:"#aeb9c8",
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 9, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    // paddingRight: `calc(1em + ${theme.spacing(8)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1,}} >
      <AppBar position="static" sx={{backgroundColor:"#ebf4fa", }}>
        <Toolbar className='pl-[4rem]'>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: "#003f70" }}
            className="text-2xl font-bold "
          >
            Dejavu Clinic
            <MedicationIcon sx={{fontSize: 35, paddingBottom:1}}/>
          </Typography>
          <Search 
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <IconButton
            size="large"
            edge="start"
            color="gray"
            aria-label="open drawer"
            sx={{ ml: 2 }}
          >
            <MenuIcon sx={{color:"#020024"}}/>
          </IconButton >
        </Toolbar>
      </AppBar>
    </Box>
  );
}