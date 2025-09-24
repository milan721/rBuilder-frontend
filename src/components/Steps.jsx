
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { addResumeAPI } from '../services/allAPI';
import Swal from 'sweetalert2'


const steps = ['Basic information', ' Contact details', 'Education', 'Work experience', 'Skills and certification', 'Review and Submit']

const Steps = ({formData, setFormData, setIsFinished }) => {

  // console.log(formData);


  const {personalData,education,experience,skills,summary} = formData



  const [inputSkill,setInputSkill] = React.useState("") // hold skill form user side

  const suggestions = ['React','Angular','Express','MongoDB'] // suggestions







    const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());


   const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const renderStepContent =(step)=>{
    switch(step){
        case 0: return (
            <div>
                <h3>Personal Info</h3>
            <div className="d-flex row p-3">
                <TextField onChange={(e)=>setFormData({...formData,personalData:{...formData.personalData,name:e.target.value}})}
                value={formData.personalData.name}
                id="standard-basic" label="Full Name" variant="standard" />
                <TextField onChange={(e)=>setFormData({...formData,personalData:{...formData.personalData,jobTitle:e.target.value}})} 
                value={formData.personalData.jobTitle}
                id="standard-basic" label="Job Title" variant="standard" />
                <TextField onChange={(e)=>setFormData({...formData,personalData:{...formData.personalData,location:e.target.value}})}
                value={formData.personalData.location}
                id="standard-basic" label="Location" variant="standard" />
            </div>
            </div>
            
        )


        case 1: return (
            <div>
                <h3>Contact Details</h3>
            <div className="d-flex row p-3">
                <TextField onChange={(e)=>setFormData({...formData,personalData:{...formData.personalData,email:e.target.value}})}
                value={formData.personalData.email}
                id="standard-basic" label="Email" variant="standard" />
                <TextField onChange={(e)=>setFormData({...formData,personalData:{...formData.personalData,phonenumber:e.target.value}})} 
                value={formData.personalData.phonenumber}
                id="standard-basic" label="Phone" variant="standard" />
                <TextField onChange={(e)=>setFormData({...formData,personalData:{...formData.personalData,github:e.target.value}})}
                value={formData.personalData.github}
                id="standard-basic" label="Github profile link" variant="standard" />
                  <TextField onChange={(e)=>setFormData({...formData,personalData:{...formData.personalData,linkedin:e.target.value}})}
                  value={formData.personalData.linkedin}
                  id="standard-basic" label="LinkedIn link" variant="standard" />
                <TextField onChange={(e)=>setFormData({...formData,personalData:{...formData.personalData,portfolio:e.target.value}})} 
                value={formData.personalData.portfolio}
                id="standard-basic" label="Portfolio link" variant="standard" />
            </div>
            </div>
            
        )



        case 2: return (
            <div>
                <h3>Educational Details</h3>
            <div className="d-flex row p-3">
                <TextField onChange={(e)=>setFormData({...formData,education:{...formData.education,course:e.target.value}})}
                value={formData.education.course}
                id="standard-basic" label="Course Name" variant="standard" />
                <TextField onChange={(e)=>setFormData({...formData,education:{...formData.education,college:e.target.value}})}
                value={formData.education.college}
                id="standard-basic" label="College Name" variant="standard" />
                <TextField onChange={(e)=>setFormData({...formData,education:{...formData.education,university:e.target.value}})}
                value={formData.education.university}
                id="standard-basic" label="University" variant="standard" />
                <TextField onChange={(e)=>setFormData({...formData,education:{...formData.education,year:e.target.value}})}
                value={formData.education.year}
                id="standard-basic" label="Year of passout" variant="standard" />
            </div>
            </div>
            
        )


        case 3: return (
            <div>
                <h3>Professional Details</h3>
            <div className="d-flex row p-3">
                <TextField onChange={(e)=>setFormData({...formData,experience:{...formData.experience,jobRole:e.target.value}})}
                value={formData.experience.jobRole}
                id="standard-basic" label="Job or Internship" variant="standard" />
                <TextField onChange={(e)=>setFormData({...formData,experience:{...formData.experience,company:e.target.value}})}
                 value={formData.experience.company}
                id="standard-basic" label="Company Name" variant="standard" />
                <TextField onChange={(e)=>setFormData({...formData,experience:{...formData.experience,location:e.target.value}})}
                 value={formData.experience.location}
                id="standard-basic" label="location" variant="standard" />
                <TextField onChange={(e)=>setFormData({...formData,experience:{...formData.experience,duration:e.target.value}})}
                 value={formData.experience.duration}
                id="standard-basic" label="Duration" variant="standard" />
            </div>
            </div>
            
        )


        case 4: return (
            <div>
                <h3>Skills</h3>
                <Box sx={{width:'100%'}}>
                    <Stack spacing={2}>
                        <TextField onChange={(e)=>setInputSkill(e.target.value)} id="standard-basic" label="Skills" variant="standard" />
                        <Button onClick={()=>addSkill(inputSkill)} variant="text" sx={{maxWidth:'40px' }}>Add</Button>
                    </Stack>
                    <div>
                        <h5>Suggestions:</h5>
                        {suggestions.map((item,index) =>(<Button className='me-2 border my-4' onClick={()=>addSkill(item)} variant="outlined" size="small">{item}</Button>))}
                    </div>
                    <div>
                      <h5>Added Skills: </h5>
                      {
                        skills.length>0 ?skills.map(item=>(
                          <span className='btn btn-primary me-2 mt-2'>{item}{" "} <button onClick={()=>handleRemoveSkill(item)} className='btn text-light'>X</button></span>
                        )) :""
                      }
                    </div>
                </Box>
            </div>
        )


        case 5: return (
            <div>
                <h3>Professional Summary</h3>
            <div className="d-flex row p-3">
                <TextField onChange={(e)=>setFormData({...formData,summary:e.target.value})}
                value={formData.summary}
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="standard"
        />
            </div>
            </div>
            
        )

        default: return null

    }
  }

  const addSkill=(skill)=>{
    // console.log(skill); just to check

    

    if(formData.skills.includes(skill)){
      alert("skill already exists")
    }else{
      // add new skill to form data
      setFormData(data=>({...data,skills:[...data.skills,skill]}))
      // ... to keep the other entries that you previously entered rest operator so it wont disappear after previous entries
    }
    
  }


  const handleAddResume=async()=>{
      try{
        const result = await addResumeAPI(formData)
        console.log(result)
        Swal.fire({
  title: 'Sucess!',
  text: 'Do you want to continue',
  icon: 'success',
  confirmButtonText: 'Back'
});
setIsFinished(true)
      }
      catch(err){
        console.log("Error"+err);
        Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
})
        
      }
    }


    const handleRemoveSkill=(item)=>{
      setFormData({...formData,skills: skills.filter(data=>data!==item)})
      // to remove ...formData to keep rest there we only want skills then filter them to remove them individually
    }




  return (


     <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
        //   if (isStepOptional(index)) {
        //     labelProps.optional = (
        //       <Typography variant="caption">Optional</Typography>
        //     );
        //   }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>


          <Box>
            {renderStepContent(activeStep)}
          </Box>



          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button>
              {activeStep === steps.length - 1 ? (<Button onClick={handleAddResume}>Finish</Button>): (<Button onClick={handleNext}>Next</Button>)}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default Steps
