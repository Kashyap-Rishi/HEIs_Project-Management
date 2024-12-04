"use client";
import React, { useState, useEffect } from 'react';
import './rejected.css';
import CodeBox from '../../../../components/codeBox/CodeBox';
import { CircularProgress } from '@mui/material';
import { ProjectDetailsDataContext, ProjectDetailsDataProvider } from '@/context/data/projects/ProjectDetailsContext';

type Params = {
  params: {
    projectDetailsCode: number;
  };
};

const RejProjectName = ({ params: { projectDetailsCode } }: Params) => {

  const formatDate = (isoDateString: string) => {
    const date = new Date(isoDateString);
    return date.toLocaleDateString(); // Converts to local date string, or use .toLocaleDateString('en-US') for a specific locale
  };
return(
  <ProjectDetailsDataProvider projectDetailsCode={projectDetailsCode}>
  <ProjectDetailsDataContext.Consumer>
  {(dataContextValue) => {
            const { data } = dataContextValue;
            if (!data) {
              return <CircularProgress />;
            }
  
            const {projects}=data;

        console.log(projects,"hi")
return (
    <div className="main-singlepj">
        <div className="sub-mainpj">
        <div className="rj-line">This project has been rejected because {projects.rejectionSummary}</div>
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

              
        </div>

    </div>
    )
  }}
      </ProjectDetailsDataContext.Consumer>
      </ProjectDetailsDataProvider>
    )
  }


export default RejProjectName