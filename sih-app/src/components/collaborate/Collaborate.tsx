import React from 'react'
import './collaborate.css'

const Collaborate = () => {
  return (
    <div className="main-cb">
       <div className="head-cb"><h3>Collaboration</h3></div> 
        <div className="pj-cb"><p>Institutions, faculty members, students, and researchers can engage in collaborative project work through a comprehensive technological infrastructure designed to facilitate seamless cooperation. </p> </div>
     <div className="clb-points">
        <div className="pts-active"><span className="mt">•</span>Integrated Video Conferencing</div>
        <div className="pts-active"><span className="mt">•</span>Real-Time Chat Application</div>
        <div className="pts-active"><span className="mt">•</span>File Sharing with Git Version Control</div>

     </div>
     <div><a className='cont_bt-cb spc'>Collaborate</a><a className='cont_bt-cb'>Fund Projects</a></div>
        </div>
        
  )
}

export default Collaborate