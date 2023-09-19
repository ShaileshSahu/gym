import React from 'react'
import {Stack,Typography} from '@mui/material';
import bodyImg from '../assests/body-part.png';
const BodyPart = ({item,setBodyPart,bodyPart}) => {
  return (
    <Stack onClick={()=>{setBodyPart(item)}}
    textAlign="center" 
    alignItems="center" 
    type="button"
    sx={{
      width:"130px",
      cursor:"pointer",
      gap:"10px",
      borderTop: item == bodyPart ? '4px solid #ff2625':'', 
      borderBottomRightRadius:"20px",
      paddingTop:'20px'
      }}>
        <img src={bodyImg} alt="health" style={{width:"60px",height:"60px"}}/>
         <Typography sx={{fontSize:{lg:"16px",sm:"12px"}}} fontWeight={500} color="#3A1212">{item && item.toUpperCase()}</Typography> 
         </Stack>
  )
}

export default BodyPart