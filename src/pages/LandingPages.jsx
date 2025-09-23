import React from 'react'
import Button from '@mui/material/Button';
import './LandingPages.css'
import { Link } from 'react-router-dom';

const LandingPages = () => {
  return (
    <div>
      <section id="bg1">
        <div className='row pt-5'>
          <div className='col-4'></div>
          <div className='col-4 box py-5 border text-center rounded'>
            <h3>Designed to get you hired</h3>
            <h3>Your skills, your story, your job - all in one platform.</h3>
            <Link to={"/resumegenerator"}><Button sx={{backgroundColor:"rgb(139, 68, 205)"}} variant="contained">Make your Resume</Button></Link>
            {/* this is to link to the next page so we put the button in a link tag and then impoert the property import { Link } from 'react-router-dom'; ie link it to the page it should go when u press the button "/resumegenerator" */}
          </div>
          <div className='col-4'></div>
        </div>
      </section>




      <section>
        <h2 className='text-center mt-4 mb-4'>Tools</h2>
        <div className="row p-5">
          <div className="col-6">
            <h4>Resume</h4>
            <p>Created unlimited Resume.</p>
            <h4>Cover letters</h4>
            <p>Write professional cover letters.</p>
            <h4>Jobs</h4>
            <p>Automatically recieve new and relevant job postings.</p>
            <h4>Applications</h4>
            <p>Manage and track your job applications efficiently.</p>
          </div>

          <div className="col-6 mb-5">
            <img height={'500px'} width={'350px'} src="https://static-cse.canva.com/blob/2119054/1131w-T9RPR4DPdiw.jpg" alt="img" />
          </div>
        </div>
      </section>





      <section id='bg2'>
        {/* for the image region ie emulate a parallax website */}
      </section>





      <section>
        <h2 className='text-center mt-4 mb-4' >Testimony</h2>
        <div className="row p-5">
          <div className="col-6">
            <h4 className='mb-3'>Trusted by professionals worldwide.</h4>
            <p className='mb-3'>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>
            <p>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>
            <p>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
          </div>

          <div className="col-6">
            <div className="row">
              <div className="col-3">
                <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="" />
              </div>
                 <div className="col-3">
                <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png" alt="" />
              </div>
                 <div className="col-3">
                <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png" alt="" />
              </div>
                 <div className="col-3">
                <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png" alt="" />
              </div>
            </div>

             <div className="row my-3">
              <div className="col-3">
                <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="" />
              </div>
                 <div className="col-3">
                <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png" alt="" />
              </div>
                 <div className="col-3">
                <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png" alt="" />
              </div>
                 <div className="col-3">
                <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png" alt="" />
              </div>
            </div>

             <div className="row my-3 mb-5">
              <div className="col-3">
                <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="" />
              </div>
                 <div className="col-3">
                <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png" alt="" />
              </div>
                 <div className="col-3">
                <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png" alt="" />
              </div>
                 <div className="col-3">
                <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>
  )
}

export default LandingPages