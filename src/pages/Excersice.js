import React, {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material';
import { excerciseOptions,fetchData, youtubeOptions } from '../utils/fetchData';
import Details from '../components/Details';
import ExerciseVideos from '../components/ExerciseVideos';
// import SimilarExercise from '../components/SimilarExercise';
const Excersice = () => {
  const [exerciseDetail, setExerciseDetail] =useState({});
  const [exerciseVideoDetail, setExerciseVideoDetail] =useState({});
  // const [equipmentExercise, setEquipmentExercise] =useState({});
  // const [targetExercise, setTargetExercise] =useState({});


  const {id} = useParams();
  useEffect(()=>{
      async function fetch() {
        const exerciseDbUrl= 'https://exercisedb.p.rapidapi.com';
        const youtubeSearch= 'https://youtube-search-and-download.p.rapidapi.com';
        const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,excerciseOptions);
        setExerciseDetail(exerciseDetailData);
        const exerciseVideoData = await fetchData(`${youtubeSearch}/search?query=${exerciseDetailData.name}`, youtubeOptions);
        setExerciseVideoDetail(exerciseVideoData);
        // const targetDetailData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,excerciseOptions);
        // setTargetExercise(targetDetailData);
        // const equipmentDetailData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,excerciseOptions);
        // setEquipmentExercise(equipmentDetailData);
      }
      fetch();
    }, [id]);

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail}/>
      <ExerciseVideos name={exerciseDetail.name} exerciseDetailData={exerciseVideoDetail}/>
      {/* <SimilarExercise targetExercise={targetExercise} equipmentExercise={equipmentExercise} /> */}
    </Box>
  )
}

export default Excersice