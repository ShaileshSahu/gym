import React, {useContext} from 'react';
import {Box,Typography} from '@mui/material';
import BodyPart from './BodyPart';
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';
import LeftArrowIcon from '../assests/left-arrow.png';
import RightArrowIcon from '../assests/right-arrow.png';
  

const LeftArrow = () => {
    const {scrollPrev} = useContext(VisibilityContext);
    return (<Typography onClick={()=> scrollPrev()}>
        <img src={LeftArrowIcon} alt="left-arrow"/>
    </Typography>)
}

const RightArrow = () => {
    const {scrollNext} = useContext(VisibilityContext);
    return (<Typography onClick={()=> scrollNext()}>
        <img src={RightArrowIcon} alt="right-arrow"/>
    </Typography>)
}
const  HorizontalBar = ({data,bodyPart,setBodyPart}) => {
    return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item)=> 
            <Box
                key={item.id || item}
                itemID = {item.id || item}
                title= {item.id || item}
                m="0 20px"
                width="100px"
            >
            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box>)}
    </ScrollMenu>)
}
 



export default HorizontalBar;