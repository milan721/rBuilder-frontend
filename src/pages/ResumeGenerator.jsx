import Button from '@mui/material/Button';
import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { FaFileImport } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ResumeGenerator = () => {
  return (
    <div>
      <div className="row my-5 d-flex justify-content-evenly">
        <h3 className='text-center my-5'>Create job winning resume in minutes</h3>
        <div className="col-4 border shadow p-5 text-center">
          <FaFileAlt className='fs-1 my-3 text-primary' />
          <h4>Add your information</h4>
          <p>Add pre-written example to each section.</p>
          <h5>Step 1</h5>
        </div>

        <div className="col-4 border shadow p-5 text-center">
          <FaFileImport className='fs-1 my-3 text-danger' />
          <h4>Download your CV</h4>
          <p>Download and start applying.</p>
          <h5>Step 2</h5>
        </div>


        <div className='d-flex justify-content-center mb-5 mt-5'>
          <Link to={"/form"}>
          <Button sx={{backgroundcolor:"rgb(139, 68, 205)"}} variant='contained'>Let's Start</Button>
          </Link>
        </div>


      </div>
    </div>
  )
}

export default ResumeGenerator