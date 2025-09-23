import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { MdDelete } from "react-icons/md";
import { deleteHistoryAPI, getHistoryAPI } from '../services/allAPI';
import { useEffect } from 'react';
import { useState } from 'react';


const History = () => {



  const [history,setHistory] = useState([])


  const getHistory=async()=>{
    const result = await getHistoryAPI()
    // console.log(result.data);
    setHistory(result.data)
  }


  const deleteHistory = async(id)=>{
    try{
      const result = await deleteHistoryAPI(id)
      console.log(result);
      getHistory()
      
    }
    catch(err){
      console.log(err);
      
    }
  }




  useEffect(()=>{
    getHistory()
  },[])


  return (
    <div>
      <Typography variant="h3" align="center" my={3}>
        Resume download history
      </Typography>
      <Stack>
        { history?.length > 0 ?
        history?.map((item,index)=>(
          <Paper elevation={5} sx={{width:400, p:5,m:3}}>
          <Button onClick={()=>deleteHistory(item?.id)} sx={{float:"right"}}><MdDelete color='red' fontSize={"26px"} /></Button>


      <Typography variant="h3" align="center">
        {item?.personalData.name}
      </Typography>

      <Typography variant="subtitle1" align="center" color='#aa00ff'>
        {item.personalData.jobTitle}
      </Typography>

            <Typography variant="body2" align="center" mb={3} color='#aa00ff'>
        {item.personalData.email}  |  {item.personalData.phonemunmber}  |  {item.personalData.location}
      </Typography>

      <Typography variant="body2" align="center" mb={3} color='#aa00ff'>
        <Link>{item.personalData.github}</Link>  |  <Link>{item.personalData.linkedin}</Link>  |  <Link>{item.personalData.portfolio}</Link>
      </Typography>

      <Divider>Summary</Divider>
      <Typography mb={3}>
        {item.summary}
      </Typography>

      
      

      <Divider>Education</Divider>
      <Typography mb={3} varient="h6" align='center'>
        Course
      </Typography>
      <Typography variant="body2" align="center" mb={3} color='#aa00ff'>
        {item.education.college}  |  {item.education.university}  |  {item.education.year}
      </Typography>

      <Divider>Professional Exp</Divider>
       <Typography mb={3} varient="h6" align='center'>
        Job Title
      </Typography>
      <Typography variant="body2" align="center" mb={3} color='#aa00ff'>
        {item.experience.company}  |  {item.experience.location}  |  {item.experience.duration}
      </Typography>

      </Paper>
        ))

        :
        <h3>No history yet....</h3>
      }
      
      </Stack>
    </div>
  );
};

export default History