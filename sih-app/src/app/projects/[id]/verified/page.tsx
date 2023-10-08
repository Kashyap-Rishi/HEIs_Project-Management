"use client";
import React from 'react'
import Testimonials from '../../../../components/testimonials/Testimonials'
import './singleproj.css'
import { useState } from 'react';
import ContactPage from '../../../../components/contactPage/ContactPage';
import CodeBox from '../../../../components/codeBox/CodeBox';
import Collaborate from '@/components/collaborate/Collaborate';
import Collab from '@/components/collab/Collab';
const ProjectName = () => {
    const[open, setOpen]=useState(false);

    const openDialog=()=>{
      setOpen(true);
    }
  return (
    <div className="main-singlepj">
        <div className="sub-mainpj">
        <div className="singlepj-head">
<h1>Agents: An Open-source Framework</h1>
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
                    <Collaborate/>
                    <Testimonials/>
                    <a onClick={() => openDialog()} className='cont_btn'> Submit a review</a>
        <ContactPage open={open} setOpen={setOpen}/>
                 <Collab/>  
              
        </div>

    </div>
  )
}

export default ProjectName