import React from 'react'
import { FaFileDownload } from "react-icons/fa";
import Stack from '@mui/material/Stack';
import { RiFileEditFill } from "react-icons/ri";
import { MdHistory } from "react-icons/md";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Edit from './Edit';
import html2canvas from 'html2canvas';
import {jsPDF} from 'jspdf';
import { addHistoryAPI } from '../services/allAPI';
import { useState } from 'react';



const Preview = ({formData, setFormData }) => {


const [resumeId, setResumeId]= useState("");

const [downloadStatus, setDownloadStatus]= useState("");

const [updateData, setUpdateData]= useState(false); // to pass status

console.log(resumeId);


  console.log(formData);
   const {personalData,education,experience,skills,summary} = formData



  const downloadPDF= async()=>{
    const input = document.getElementById("result") // to get document
    const canvas = await html2canvas(input,{scale:2}) // convert selected html to canvas (screenshot)
    const imgData = canvas.toDataURL('image/png')
    // create pdf
    const pdf = new jsPDF("p",'mm','a4')
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (canvas.height*pdfWidth)/canvas.width

    pdf.addImage(imgData,'PNG',0,0,pdfWidth,pdfHeight)
    pdf.save('resume.pdf')

    try{
      const result = await addHistoryAPI(formData)
      console.log(result);
      setResumeId(result.data.id);
      setDownloadStatus(true)
    }
    catch(err){
      console.log(err);
    }
  }

const handleUpdate = (data)=>{
  setUpdateData(data)
}



  return (
    <div>

      <Stack
  direction="row"
  spacing={2}
  sx={{
    justifyContent: "center",
    alignItems: "flex-end",
  }}>
      
{downloadStatus ? (
  <Stack
  direction="row">
  <Button onClick={downloadPDF}><FaFileDownload className='fs-3' /></Button>
  <Edit resumeId={resumeId} onUpdate={handleUpdate}/>
  {/* linked to the edit component */}
  <Link href={'/history'}><Button><MdHistory className='fs-3' /></Button></Link>
</Stack>
):(
  <Button onClick={downloadPDF}><FaFileDownload className='fs-3' /></Button>
)}
</Stack>



 <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 750,
          mt:5,
          p:5,
          borderRadius:2
        },
      }}
    >
      <Paper elevation={7} id="result">

      {updateData? <Typography variant="h3" align="center">
        {updateData.personalData.name}
      </Typography> : <Typography variant="h3" align="center">
        {formData.personalData.name}
      </Typography>}

      {updateData? <Typography variant="subtitle1" align="center" color='#aa00ff'>
        {updateData.personalData.jobTitle}
      </Typography> : <Typography variant="subtitle1" align="center" color='#aa00ff'>
        {formData.personalData.jobTitle}
      </Typography>}

      {updateData? <Typography variant="body2" align="center" mb={3} color='#aa00ff'>
        {updateData.personalData.email}  |  {updateData.personalData.phonenumber}  |  {updateData.personalData.location}
      </Typography> : <Typography variant="body2" align="center" mb={3} color='#aa00ff'>
        {formData.personalData.email}  |  {formData.personalData.phonenumber}  |  {formData.personalData.location}
      </Typography>}

      {updateData? <Typography variant="body2" align="center" mb={3} color='#aa00ff'>
        <Link href={updateData.personalData.github}>Github</Link>  |  <Link href={updateData.personalData.linkedin}>LinkedIn</Link>  |  <Link href={updateData.personalData.portfolio}>Portfolio</Link>
      </Typography> : <Typography variant="body2" align="center" mb={3} color='#aa00ff'>
        <Link href={formData.personalData.github}>Github</Link>  |  <Link href={formData.personalData.linkedin}>LinkedIn</Link>  |  <Link href={formData.personalData.portfolio}>Portfolio</Link>
      </Typography>}

      <Divider>Summary</Divider>
      {updateData?<Typography mb={3}>
        {updateData.summary}
      </Typography>:<Typography mb={3}>
        {formData.summary}
      </Typography>}

      
      

      <Divider>Education</Divider>
      {updateData? <Typography mb={3} varient="h6" align='center'>
        {updateData.education.course}
      </Typography> : <Typography mb={3} varient="h6" align='center'>
        {formData.education.course}
      </Typography>}
      {updateData? <Typography variant="body2" align="center" mb={3} color='#aa00ff'>
        {updateData.education.college}  |  {updateData.education.university}  |  {updateData.education.year}
      </Typography> : <Typography variant="body2" align="center" mb={3} color='#aa00ff'>
        {formData.education.college}  |  {formData.education.university}  |  {formData.education.year}
      </Typography>}



       <Divider>Professional Exp</Divider>
       {updateData?<Typography mb={3} varient="h6" align='center'>
        {updateData.experience.jobRole}
      </Typography>:<Typography mb={3} varient="h6" align='center'>
        {formData.experience.jobRole}
      </Typography>}
     {updateData? <Typography variant="body2" align="center" mb={3} color='#aa00ff'>
        {updateData.experience.company}  |  {updateData.experience.location}  |  {updateData.experience.duration}
      </Typography>: <Typography variant="body2" align="center" mb={3} color='#aa00ff'>
        {formData.experience.company}  |  {formData.experience.location}  |  {formData.experience.duration}
      </Typography>}

      <Divider>Skills</Divider>
      {updateData? <Stack direction={'row'} justifyContent={'space-evenly'} mt={3} sx={{flexWrap:'wrap'}} spacing={{xs:1, sm:2}}>
  {skills.map((item)=>(
    <div>
      <Button className='mt-2' variant='contained'>{item}</Button>
    </div>
  ))}
</Stack>: <Stack direction={'row'} justifyContent={'space-evenly'} mt={3} sx={{flexWrap:'wrap'}} spacing={{xs:1, sm:2}}>
  {skills.map((item)=>(
    <div>
      <Button className='mt-2' variant='contained'>{item}</Button>
    </div>
  ))}
</Stack>}

      </Paper>


    </Box>


    </div>
  )
}

export default Preview