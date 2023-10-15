"use client";
import React, { useState, ChangeEvent, useEffect } from 'react';
import prisma from '@/app/lib/connect';
import getAllProject from '@/app/lib/getAllProject';
import './unverfpoj.css';
import CodeBox from '../../../../components/codeBox/CodeBox';

type Projects = {
  id: number;
  projectName: string;
  description: string;
  studentName: string;
  status: string;
};

type Params = {
  params: {
    id: number;
  };
};

const UnvfProjectName = ({ params: { id } }: Params) => {
  const [file, setFile] = useState<File | null>(null);
  const [longDescription, setLongDescription] = useState<string>('');
  const [projectData, setProjectData] = useState<Projects | null>(null);

  // Function to fetch project data
  const fetchProjectData = (id: number): Promise<Projects> => {
    return new Promise((resolve, reject) => {
      getAllProject(id)
        .then((projectData) => {
          resolve(projectData);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  useEffect(() => {
    fetchProjectData(id)
      .then((data) => {
        setProjectData(data);
      })
      .catch((error) => {
        console.error('Error fetching project data', error);
      });
  }, [id]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFile(selectedFile || null);
  };

  const handleLongDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setLongDescription(e.target.value);
  };

  const handlePublishClick = () => {
    if (projectData) {
      fetch(`http://localhost:3000/api/singleprojects/id?id=${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'published' }),
      })
        .then((response) => {
          if (response.ok) {
            window.alert('Project status updated successfully');
            console.log('Project status updated successfully');

            // Open a new window with the same URL and then close the current window
            const newWindow = window.open(window.location.href, '_self');
            if (newWindow) {
              newWindow.addEventListener('load', () => {
                window.close();
              });
            }
          } else {
            console.error('Error updating project status', response.status);
          }
        })
        .catch((error) => {
          console.error('Error updating project status', error);
        });
    }
  };

  const handlePublishClickRejected = () => {
    if (projectData) {
      fetch(`http://localhost:3000/api/singleprojects/id?id=${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'rejected', rejectionSummary: longDescription }),
      })
        .then((response) => {
          if (response.ok) {
            window.alert('Project status updated successfully');
            console.log('Project status updated successfully');

            // Open a new window with the same URL and then close the current window
            const newWindow = window.open(window.location.href, '_self');
            if (newWindow) {
              newWindow.addEventListener('load', () => {
                window.close();
              });
            }
          } else {
            console.error('Error updating project status', response.status);
          }
        })
        .catch((error) => {
          console.error('Error updating project status', error);
        });
    }
  };


  return (
    <div className="main-singlepj">
         {projectData ? (
        <div className="sub-mainpj">
        <div className="singlepj-head">
        <h1>{projectData?.projectName}</h1>

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

     <div  className="plg-rpt"> <a href="https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1636980709/catalog/1460226298045755392/xvky8hsu9zaa35dn7iez.jpg" className="random" >Plagiarism Report</a></div>

           <div className="pblish">
           <div className="hd-pb">
        <h3>Publish project</h3>
      </div>
      <hr className="code-set-hr2"/>
      <div className="desc-pb">
        <label htmlFor="fileInput">Upload the project : </label>
        <input
          type="file"
          id="fileInput"
          accept=".pdf"
          onChange={handleFileChange}
        />
        <div className="pb-btn"> <button onClick={handlePublishClick}>Publish</button></div>
       
      </div>
      

           </div>
           <div className="pblish">
           <div className="hd-pb">
        <h3>Reject project</h3>
      </div>
      <hr className="code-set-hr2"/>
      <div className="desc-pb2">
        <label htmlFor="fileInput">Reason of rejection : </label>
        <textarea rows={10} cols={120}
          id="longDescriptionInput"
          value={longDescription}
          onChange={handleLongDescriptionChange}
        />


        <div className="pb-btn2"> <button onClick={handlePublishClickRejected}>Reject</button></div>
       
      </div>
      

           </div>
               
       
                 
              
        </div>
      ) : (
        <p>Loading project data...</p>
      )}

    </div>
  )
}

export default UnvfProjectName