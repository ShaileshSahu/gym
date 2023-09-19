import React from 'react'
import {Box, Stack, Typography} from '@mui/material';
const ExerciseVideos = ({exerciseDetailData, name}) => {
  const exerciseDetail = exerciseDetailData?.contents ?? [];
  console.log(exerciseDetailData);
  if(!exerciseDetail.length) return <div>Loading....</div>
  return (
      <Box sx={{marginTop:{lg:'200px',xs:'150px'}}}>
        <Typography variant="h3" mb="33px">
          Watch <span style={{color:'#ff2525', textTransform:'capitalize'}}>{name}</span> exercise videos
        </Typography>
        <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center" sx={{flexDirection:{lg:'row'}, gap:{lg:'110px', xs:'0'}}}>
          {exerciseDetail?.slice(0,3).map((item,index)=>(
           <Box>
           <a key={index} className="exerciseVideo" rel="noreferrer" target="_blank"href={`https://www.youtube.com/watch/v=${item.video.videoId}`}>
              <img src={item?.video?.thumbnails[0].url} alt={item.video.title }/>
            </a>
            
              <Typography variant="h6" color="#000">
                {item.video.title}
              </Typography>
              
              <Typography variant="h6" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
           
          ))}

        </Stack>
      </Box>
    )
}

export default ExerciseVideos