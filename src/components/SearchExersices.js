import React, {useEffect,useState} from 'react'
import {Box,Button, Stack, TextField, Typography} from '@mui/material';
// import {SearchOffSharp} from '@mui/icons-material';
import {excerciseOptions,fetchData} from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalBar';
const SearchExersices = ({setExcercise, bodyPart, setBodyPart}) => {
  const [bodyParts,setBodyParts] = useState([]);
  const [search,setSearch] = useState('');
  
  useEffect(()=> {
    const fetchBodyPart = async () => {
      const bodyParts = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', excerciseOptions);
      setBodyParts(["all",...bodyParts]);
    }
    fetchBodyPart();
  },[]);

  const handleSearch = async(e) => {
    if(search.length) {
      const exercises = await fetchData('https://exercisedb.p.rapidapi.com/exercises', excerciseOptions);
      setExcercise(
        exercises.filter(exercise => 
              exercise.bodyPart.includes(search) ||
              exercise.equipment.includes(search) ||
              exercise.name.includes(search) ||
              exercise.target.includes(search) )
      );
      setSearch('');
    }
  };
  
  return (
   <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
    <Typography fontWeight={700} sx={ {fontSize:{lg:'44px',xs:'30px'}}} mb="50px" textAlign="center">
      Awesome <span style={{color:"#FF2625"}}>Exercise</span> you <br/> Should know
    </Typography>
    <Box position="relative" mb="72px">
      <TextField sx={{input:{
          fontWeight:'700', 
          border:'none', 
          borderRadius:'4px',
      }, width:{lg:"800px", xs:"350px"}, background:"#fff", borderRadius:"40px" }} height="76px" value={search}  placeholder="Search Excercises" onChange={ (e)=> {setSearch(e.target.value)}} type="text" />
      <Button sx={{backgroundColor:"#FF2625",color:"#fff",textTransform:'none', width:{lg:'175px', xs:'80px'}, fontSize:{lg:'20px',xs:'14px'},height:"56px",position:'absolute',right:'0px'}}  onClick={handleSearch}>Search</Button>
    </Box>

    <Box sx={{position:"relative", width:"100%", p:"20px"}}>
      <HorizontalScrollbar data={bodyParts} setBodyPart={setBodyPart} bodyPart={bodyPart} />
    </Box>
   </Stack>
  )
}

export default SearchExersices