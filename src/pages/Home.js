import React, {useState} from 'react'
import {Box} from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExersices from '../components/SearchExersices';
import Exersices from '../components/Exersices';
const Home = () => {
  const [excercise, setExcercise] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  return (
    <Box>
        <HeroBanner/>
        <SearchExersices 
          setExcercise={setExcercise} 
          bodyPart={bodyPart} 
          setBodyPart={setBodyPart} 
        />
        <Exersices
         setExcercise={setExcercise} 
         excercise={excercise} 
         setBodyPart={setBodyPart} 
         bodyPart={bodyPart}
        />
    </Box>
    )
}

export default Home