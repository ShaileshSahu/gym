import React,{useState,useEffect} from 'react'
import Pagination from '@mui/material/Pagination';
import {Box,Stack,Typography} from '@mui/material';
import {excerciseOptions,fetchData} from '../utils/fetchData';
import Exercise from './Exercise';
import Loader from './Loader';
const Exersices = ({excercise,bodyPart,setExcercise}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 10;
  const paginate = (e,value) => {
      setCurrentPage(value);
      window.scrollTo({top:1900,behavior:'smooth' })
  }
  const indexOfLast = currentPage * exercisePerPage;
  const indexOfFirst = indexOfLast - exercisePerPage;
  const currentExercise = excercise.slice(indexOfFirst, indexOfLast);

  useEffect(()=>{
    const fetchExercise = async() => {
      let exerciseList = [];
      if(bodyPart === "all") {
        exerciseList = await fetchData('https://exercisedb.p.rapidapi.com/exercises', excerciseOptions);
      } else {
        exerciseList = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, excerciseOptions);
      }
      setExcercise(exerciseList);
    }
    fetchExercise();
  },[excercise]);
  return (
    <Box id="excercise"
      sx={{mt:{lg:'30px'}}}
      mt="50px"
      p="20px"
    >
        <Typography variant="h3" mb="46px">Showing <span style={{color:"#ff2212"}}>Result</span></Typography>
        <Stack direction="row" sx={{gap:{lg:'110px', xs:'50px'}}} flexWrap="wrap" justifyContent="center">
            {
               currentExercise.map((ele,index)=>
                  <Exercise key={index} exercise={ele}/>
              )
            }
        </Stack>
          <Stack mt="10px" alignItems="center">
              {
              excercise.length ?
                <Pagination 
                color="standard" 
                shape="round" 
                defaultPage={1} 
                count={Math.ceil(excercise.length/exercisePerPage)}
                page={currentPage}
                onChange={paginate}
                size="large"
                /> : <Loader/>

            }
          </Stack>
      </Box>
    )
}

export default Exersices