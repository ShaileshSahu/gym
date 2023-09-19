import React from 'react'
import {Link} from 'react-router-dom';
import {Button,Box, Stack, Typography} from '@mui/material';
const Exercise = ({exercise}) => {
  return (
    <Box>
    <Link style={{textDecoration:'none'}} to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} loading="lazy" alt={exercise.gifUrl}/>
        <Stack direction="row">
          <Button sx={{
            ml:'21px', color:"#fff", background:'#ffa9a9', fontSize:'14px',
            borderRadius:'20px', textTransform:'capitalize',textDecoration:'none'
            }}> {exercise.bodyPart}
          </Button>
          <Button sx={{
            ml:'21px', color:"#fff", background:'#fcc757', fontSize:'14px',
            borderRadius:'20px', textTransform:'capitalize',textDecoration:'none'
            }}> {exercise.target}
          </Button>
          <br/>
          <Typography ml="21px" color="#000" fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize" fontSize="24px">
            {exercise.name.substr(0,20)}
          </Typography>
        </Stack>
    </Link>
    </Box>
  
  )
}

export default Exercise