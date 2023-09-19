import React from 'react'
import {Box,Stack,Typography} from '@mui/material';
import HorizontalBar from './HorizontalBar';
import Loader from './Loader';
const SimilarExercise = ({targetExercise,equimentExercise}) => {
  return (
    <Box>
      <Typography>Exercises that target the same muscle group</Typography>
      <Stack direction="row" sx={{p:'2', position:'relative'}}>
        {/* {targetExercise.length ? <HorizontalBar data={targetExercise}/> : <Loader/>} */}
      </Stack>
    </Box>
  )
}

export default SimilarExercise