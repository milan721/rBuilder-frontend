import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { RiFileEditFill } from "react-icons/ri";
import { Stack, TextField } from "@mui/material";
import { getAResumeHistoryAPI, updateResumeHistoryAPI } from "../services/allAPI";
import { useEffect } from "react";
import { useState } from "react";
import Swal from 'sweetalert2'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  maxHeight: "80vh",
  overflowY: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Edit = ({ resumeId , onUpdate }) => {
  
  

const [resumeDetails, setResumeDetails] = useState({
  personalData:{
      name:"",
      jobTitle:"",
      location:"",
      email:"",
      phonenumber:"",
      github:"",
      linkedin:"",
      portfolio:""

    },

    education:{
      course:"",
      college:"",
      university:"",
      year:""

    },

    experience:{
      jobRole:"",
      company:"",
      location:"",
      duration:""

    },

    skills:[],
    summary:""
})



 const [inputSkill,setInputSkill] = React.useState("")



 console.log(resumeId);



  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  useEffect(()=>{
    getAResume()
  },[resumeId])

  const getAResume = async()=>{
    const result = await getAResumeHistoryAPI(resumeId)
    console.log(result.data);
    setResumeDetails(result.data)
    
  }

  //console.log(resumeDetails);









  const updateResume=async()=>{
        try{
          const result = await updateResumeHistoryAPI(resumeId,resumeDetails);
          console.log(result);
          if(result.status==200){
          Swal.fire({
    title: 'Sucess!',
    text: 'Resume updated successfully',
    icon: 'success',
    confirmButtonText: 'Back'
  });

  handleClose()
  onUpdate(result.data)
}
else{
  // error alert
          Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'back'
});
}
        }
 
       
        catch(err){
          console.log(err);
          
         
  }
          
    
      };




   const addSkill=(skill)=>{
    // console.log(skill); just to check

    

    if(resumeDetails.skills.includes(skill)){
      alert("skill already exists")
    }else{
      // add new skill to form data
      setResumeDetails(data=>({...data,skills:[...data.skills,skill]}))
      // ... to keep the other entries that you previously entered rest operator so it wont disappear after previous entries
    }
    
  }

      const handleRemoveSkill=(item)=>{
        console.log(item);
        console.log(resumeDetails.skills);
      setResumeDetails({...resumeDetails, skills: resumeDetails ?.skills.filter((data)=>data!==item)})
      // to remove ...formData to keep rest there we only want skills then filter them to remove them individually
    }


  return (
    <div>
      <Button onClick={handleOpen}>
        <RiFileEditFill className="fs-3" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
              <h3>Personal Info</h3>
              <div className="d-flex row p-3">
                <TextField onChange={(e)=>setResumeDetails({...resumeDetails,personalData:{...resumeDetails.personalData,name:e.target.value}})}
                  id="standard-basic" value={resumeDetails?.personalData?.name}
                  label="Full Name"
                  variant="standard"
                />
                <TextField onChange={(e)=>setResumeDetails({...resumeDetails,personalData:{...resumeDetails.personalData,jobTitle:e.target.value}})} 
                  id="standard-basic"  value={resumeDetails?.personalData?.jobTitle}
                  label="Job Title"
                  variant="standard"
                />
                <TextField
                  id="standard-basic" onChange={(e)=>setResumeDetails({...resumeDetails,personalData:{...resumeDetails.personalData,location:e.target.value}})}
                  label="Location"  value={resumeDetails?.personalData?.location}
                  variant="standard"
                />
              </div>
            </div>

            <div>
              <h3>Contact Details</h3>
              <div className="d-flex row p-3">
                <TextField
                  id="standard-basic" onChange={(e)=>setResumeDetails({...resumeDetails,personalData:{...resumeDetails.personalData,email:e.target.value}})}
                  label="Email"  value={resumeDetails?.personalData?.email}
                  variant="standard"
                />
                <TextField
                  id="standard-basic" onChange={(e)=>setResumeDetails({...resumeDetails,personalData:{...resumeDetails.personalData,phonenumber:e.target.value}})} 
                  label="Phone"  value={resumeDetails?.personalData?.phonenumber}
                  variant="standard"
                />
                <TextField
                  id="standard-basic" onChange={(e)=>setResumeDetails({...resumeDetails,personalData:{...resumeDetails.personalData,github:e.target.value}})}
                  label="Github profile link"  value={resumeDetails?.personalData?.github}
                  variant="standard"
                />
                <TextField
                  id="standard-basic" onChange={(e)=>setResumeDetails({...resumeDetails,personalData:{...resumeDetails.personalData,portfolio:e.target.value}})} 
                  label="Portfolio link"  value={resumeDetails?.personalData?.portfolio}
                  variant="standard"
                />
              </div>
            </div>

            <div>
              <h3>Educational Details</h3>
              <div className="d-flex row p-3">
                <TextField
                  id="standard-basic"  onChange={(e)=>setResumeDetails({...resumeDetails,education:{...resumeDetails.education,course:e.target.value}})}
                  label="Course Name"  value={resumeDetails?.education?.course}
                  variant="standard"
                />
                <TextField
                  id="standard-basic" onChange={(e)=>setResumeDetails({...resumeDetails,education:{...resumeDetails.education,college:e.target.value}})}
                  label="College Name"  value={resumeDetails?.education?.college}
                  variant="standard"
                />
                <TextField
                  id="standard-basic" onChange={(e)=>setResumeDetails({...resumeDetails,education:{...resumeDetails.education,university:e.target.value}})}
                  label="University" value={resumeDetails?.education?.university}
                  variant="standard"
                />
                <TextField
                  id="standard-basic" onChange={(e)=>setResumeDetails({...resumeDetails,education:{...resumeDetails.education,year:e.target.value}})}
                  label="Year of passout" value={resumeDetails?.education?.year}
                  variant="standard"
                />
              </div>
            </div>

            <div>
              <h3>Professional Details</h3>
              <div className="d-flex row p-3">
                <TextField
                  id="standard-basic"  onChange={(e)=>setResumeDetails({...resumeDetails,experience:{...resumeDetails.experience,jobRole:e.target.value}})}
                  label="Job or Internship" value={resumeDetails?.experience?.jobRole}
                  variant="standard"
                />
                <TextField
                  id="standard-basic" onChange={(e)=>setResumeDetails({...resumeDetails,experience:{...resumeDetails.experience,company:e.target.value}})}
                  label="Company Name" value={resumeDetails?.experience?.company}
                  variant="standard"
                />
                <TextField
                  id="standard-basic" onChange={(e)=>setResumeDetails({...resumeDetails,experience:{...resumeDetails.experience,location:e.target.value}})}
                  label="location" value={resumeDetails?.experience?.location}
                  variant="standard"
                />
                <TextField
                  id="standard-basic" onChange={(e)=>setResumeDetails({...resumeDetails,experience:{...resumeDetails.experience,duration:e.target.value}})}
                  label="Duration" value={resumeDetails?.experience?.duration}
                  variant="standard"
                />
              </div>
            </div>

            <div>
              <h3>Skills</h3>
              <Box sx={{ width: "100%" }}>
                <Stack spacing={2}>
                  <TextField  onChange={(e)=>setInputSkill(e.target.value)}
                    id="standard-basic"
                    label="Skills"
                    variant="standard"
                  />
                  <Button onClick={()=>addSkill(inputSkill)} variant="text" sx={{ maxWidth: "40px" }}>
                    Add
                  </Button>
                </Stack>
                <div>
                  <h5>Selected:</h5>
                  { resumeDetails?.skills?.length>0 ? resumeDetails?.skills?.map((item,index)=>(
                  <span className='btn btn-primary me-2 mt-2'>{item}{" "} <button onClick={()=>handleRemoveSkill(item)} className='btn text-light'>X</button></span>
                  )):""
                }
                </div>
              </Box>
            </div>

            <div>
              <h3>Professional Summary</h3>
              <div className="d-flex row p-3">
                <TextField onChange={(e)=>setResumeDetails({...resumeDetails, summary: e.target.value})} value={resumeDetails?.summary}
                  id="standard-multiline-static"
                  label="Multiline"
                  multiline
                  rows={4}
                  defaultValue="Default Value"
                  variant="standard"
                />
              </div>
            </div>
          </Typography>
          <Button onClick={updateResume}>Update</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Edit;
