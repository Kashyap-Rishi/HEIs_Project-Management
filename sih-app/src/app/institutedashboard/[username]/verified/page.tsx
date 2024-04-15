import React from 'react'
import Link from 'next/link';
import './inst.css'
import Image from 'next/image';
import getInstituteUsers from '@/app/lib/getInstituteUsers';
import getInstitute from "../../../lib/getInstitute"
import getProject from '@/app/lib/getProject';

import ProjCardPublished from '@/components/ProjCardPublished/ProjCardPublished';

type Institute={
  username:string;
  email:string;
  institutename:string;
}
type User={
    username:string;
    email:string;
    
  }
type Params ={
   params:{
    username:string
   }
}

const InstituteDashboard = async ({params:{username}}:Params) => {
 

    const instData: Institute = await getInstitute(username);
    const userData: User[] = await getInstituteUsers(instData.institutename);

    const projectPromises = userData.map((user) => getProject(user.username));
    const projectDataArray = await Promise.all(projectPromises);
    const extractedProjectData: { id: number, projectName: string, description:string ,status:string}[] = [];


for (const projects of projectDataArray) {
  for (const project of projects) {
    const { id, projectName,description,status } = project;
    
    if (status === 'published') {
        extractedProjectData.push({ id, projectName, description, status });
      }
  }
}


  return (
    <div className="main-inst">
        <div className="inst-title">
           <div className="overview"><span><Link className="verif" href={`/institutedashboard/[username]/verified`} as={`/institutedashboard/${username}/verified`}>Overview</Link></span></div>
           <div><span><Link className="unverif" href={`/institutedashboard/[username]/unverified`} as={`/institutedashboard/${username}/unverified`}>Unverified Projects (10)</Link></span></div>
        </div>

        <div className="inst-display">
            <div className="img-sec"> 
            <Image src="/images/coll-m.png" alt="" width={150} height={150} className="inst-img"/>
            </div>
           
            <div className="inst-name">
                <div className="inst-foll">{instData.institutename}</div>
                <div className="inst-foll2">
                    <div className="sub-fl"><span>34</span>Followers</div>
                    <div className="sub-fl"><span>10</span>Followings</div>
                </div>
            </div>
        </div>
        <hr className="inst-hr"/>
        <div className="inst-publish">
            <div className="hd-publish"><h2>Published projects</h2></div>

        </div>
        <div className="projs-sec">
        {extractedProjectData.map((category) => (
     <div className="proj-sub-inst">
          <ProjCardPublished id={category.id} name={category.projectName} description={category.description}
   link1="Mangalam" link2="Kashyap" link3="Deep" date="26/11/23" likes="1M" bookmarks="420" citations="420" statusproject={category.status} statusBackgroundColor="rgb(121, 240, 121)"></ProjCardPublished>

</div>



))}
    </div>
    </div>
  )
}


export default InstituteDashboard