import React from 'react'
import {Box, Stack} from '@mui/material';
const Footer = () => {
  return (
    <Box mt="80px" style={{background:"rgb(255 193 7 / 9%)"}}>
      <Stack gap='40px' sx={{alignItems:"center", px:"40px", pt:"25px"}} alignItems="center">
        Developed by SCS Computers.
      </Stack>

    </Box>
  )
}

export default Footer