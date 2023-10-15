"use client";
import React, { useState, useEffect } from 'react';
import './rejected.css';
import getAllProject from '@/app/lib/getAllProject';
import CodeBox from '../../../../components/codeBox/CodeBox';

type Projects = {
  id: number;
  projectName: string;
  rejectionSummary: String;
  description: string;
  studentName: string;
  status: string;
};

type Params = {
  params: {
    id: number;
  };
};

const RejProjectName = ({ params: { id } }: Params) => {
  const [open, setOpen] = useState(false);
  const [projectData, setProjectData] = useState<Projects | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllProject(id);
        setProjectData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);


  return (
    <div className="main-singlepj">
        <div className="sub-mainpj">
        <div className="singlepj-head">
<h1>{projectData?.projectName}</h1>
        </div>
        <div className="rej_status">
            <div className="rej_head"><h3>Reason for rejection</h3></div>
            <div className="rej_desc">
                <p>{projectData?.rejectionSummary}</p>
            </div>
        </div>
        <div className="singlepj-desc">
<p><span className="author">Wangchunshu Zhou</span>, <span className="author">Yuchen Eleanor Jiang</span>, <span className="author">Long Li</span></p>
<p><span className="author2">Published on&nbsp;·&nbsp; 14 Sep 2023</span >  </p>
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
}

export default RejProjectName