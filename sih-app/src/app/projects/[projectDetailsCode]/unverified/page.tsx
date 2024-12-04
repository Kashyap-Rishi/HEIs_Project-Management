"use client";
import React, { useState, ChangeEvent, useEffect } from 'react';
import './unverfpoj.css';
import CodeBox from '../../../../components/codeBox/CodeBox';
import { CircularProgress } from '@mui/material';
import { ProjectDetailsDataContext, ProjectDetailsDataProvider } from '@/context/data/projects/ProjectDetailsContext';
import { useRouter } from 'next/navigation';
import axios from 'axios'

type Params = {
  params: {
    projectDetailsCode: number;
  };
};

const UnvfProjectName = ({ params: { projectDetailsCode } }: Params) => {
  const router = useRouter();
  const [grade, setGrade] = useState(1);
  const [remarks, setRemarks] = useState('');
  const [rejectionReason, setRejectionReason] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmitGrade = async () => {
    setLoading(true);
    try {
      const response = await axios.put(`http://localhost:8000/api/project/updateProjectDetails/${projectDetailsCode}`, {
        grade: grade,
        action:'accept'
       
      });
      router.back();
    } catch (error) {
      console.error('Error grading project:', error);
    }
    setLoading(false);
  };

  const handleRejectProject = async () => {
    setLoading(true);
    try {
      const response = await axios.put(`http://localhost:8000/api/project/updateProjectDetails/${projectDetailsCode}`, {
        rejectionReason: rejectionReason,
        action:'reject'
      });
      router.back();
    } catch (error) {
      console.error('Error rejecting project:', error);
    }
    setLoading(false);
  };

  const formatDate = (isoDateString: string) => {
    const date = new Date(isoDateString);
    return date.toLocaleDateString(); // Converts to local date string, or use .toLocaleDateString('en-US') for a specific locale
  };
 



  return (
    <ProjectDetailsDataProvider projectDetailsCode={projectDetailsCode}>
<ProjectDetailsDataContext.Consumer>
{(dataContextValue) => {
          const { data } = dataContextValue;
          if (!data) {
            return <CircularProgress />;
          }

          const {projects}=data;

          return(
    <div className="main-singlepj">
       
        <div className="sub-mainpj">
        <div className="singlepj-head">
        <h1>{projects.title}</h1>

        </div>
        <div className="singlepj-desc">

        {projects.teamMembers.map((member:string, index:number) => (
<p style={{display:'inline-block'}} key={index} className="author">• {member} &nbsp;</p>
  ))}
<p><span className="author2">Published on&nbsp;·&nbsp; {formatDate(projects.createTime)}</span >  </p>
        </div>
        <div className="singlepj-para">
<p>Recent advances on large language models (LLMs) enable researchers and developers to build autonomous language agents that can automatically solve various tasks and interact with environments, humans, and other agents using natural language interfaces. We consider language agents as a promising direction towards artificial general intelligence and release Agents, an open-source library with the goal of opening up these advances to a wider non-specialist audience. Agents is carefully engineered to support important features including planning, memory, tool usage, multi-agent communication, and fine-grained symbolic control. Agents is user-friendly as it enables non-specialists to build, customize, test, tune, and deploy state-of-the-art autonomous language agents without much coding. The library is also research-friendly as its modularized design makes it easily extensible for researchers.</p>
        </div>
        <div className="down-pj">
            <a className="random"href="https://arxiv.org/pdf/2309.07870v1.pdf" >
            
                    <span className="down-pdf ">PDF </span></a>
                    <a href="https://arxiv.org/pdf/2309.07870v1.pdf" >
            
                    <span className="down-pdf">Abstract </span></a>
                    
                    </div>
                   <hr className="pj-div1"/>
                    <div className="pj-infos">
                        
                        <div className="pj-infos1">
                            <div className=""></div>
                            </div>
                        <div className="pj-infos2">

                        </div>
                    </div>
                    <CodeBox/>

     <div  className="plg-rpt"> <a href="https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1636980709/catalog/1460226298045755392/xvky8hsu9zaa35dn7iez.jpg" className="random" >Plagiarism Report</a></div>

     <div className="pblish">
  <div className="hd-pb">
    <h3>Grade project</h3>
  </div>
  <hr className="code-set-hr2"/>
  <div className="desc-pb">
    <label htmlFor="gradeSelect" className="grade-label">Grade out of 10:</label>
    <select id="gradeSelect" className="grade-select" value={grade} onChange={(e) => setGrade(parseInt(e.target.value))}>
     
      {[...Array(10)].map((_, index) => (
        <option key={index} value={index + 1}>{index + 1}</option>
      ))}
    </select>
    <label htmlFor="remarks">Remarks (if any) : </label>
        <textarea rows={10} cols={120}
          id="longDescriptionInput"
          value={remarks} onChange={(e) => setRemarks(e.target.value)} 
     
        />
     <div className="pb-btn">
                      <button className="publish-button" onClick={handleSubmitGrade} disabled={loading}>Submit</button>
                    </div>
                  </div>
                </div>
                <div className="pblish">
                  <div className="hd-pb">
                    <h3>Reject project</h3>
                  </div>
                  <hr className="code-set-hr2" />
                  <div className="desc-pb2">
                    <label htmlFor="fileInput">Reason of rejection: </label>
                    <textarea rows={10} cols={120} id="longDescriptionInput" value={rejectionReason} onChange={(e) => setRejectionReason(e.target.value)} />
                    <div className="pb-btn2">
                      <button onClick={handleRejectProject} disabled={loading}>Reject</button>
                    </div>
       
      </div>
      

           </div>
               
       
                 
              
        </div>
 
      

    </div>
          )
}}
    </ProjectDetailsDataContext.Consumer>
    </ProjectDetailsDataProvider>
  )
}

export default UnvfProjectName