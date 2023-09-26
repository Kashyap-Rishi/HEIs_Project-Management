
import React from 'react'
import Link from 'next/link';
import './instunvf.css'
import Image from 'next/image';

import ProjCardSI from '@/components/ProjCardSI/ProjCardSI';

import getInstitute from "../../../lib/getInstitute"


type Institute={
  username:string;
  email:string;
  institutename:String;
}

type Params ={
   params:{
    username:string
   }
}






export default async function InstituteDashboardUnvf({params:{username}}:Params){
    try{
        const userData: Institute = await getInstitute(username);
  return (
    <div className="main-inst">
        <div className="inst-title">
        <div className="overview"><span><Link className="unverif" href={`/institutedashboard/[username]/verified`} as={`/institutedashboard/${username}/verified`}>Overview</Link></span></div>
           <div><span><Link className="verif" href={`/institutedashboard/[username]/unverified`} as={`/institutedashboard/${username}/unverified`}>Unverified Projects (10)</Link></span></div>
        </div>

        <div className="inst-display">
            <div className="img-sec"> 
            <Image src="/images/coll-m.png" alt="" width={150} height={150} className="inst-img"/>
            </div>
            <div className="inst-name">
                <div className="inst-foll">{userData.institutename}</div>
                <div className="inst-foll2">
                    <div className="sub-fl"><span>34</span>Followers</div>
                    <div className="sub-fl"><span>10</span>Followings</div>
                </div>
            </div>
        </div>
        <hr className="inst-hr"/>
        <div className="inst-publish">
            <div className="hd-publish"><h2>Pending projects</h2></div>

        </div>
        <div className="projs-sec">
            <div className="proj-sub">
                    <ProjCardSI name="Project: Video Calling app" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            " link1="Mangalam" link2="Kashyap" link3="Deep" date="26/11/23" likes="1M" bookmarks="420" citations="420" statusproject="Unverified" statusBackgroundColor="rgb(238, 238, 119)"></ProjCardSI>
            </div>
            <div className="proj-sub">
                                <ProjCardSI name="Project: Video Calling app" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            " link1="Mangalam" link2="Kashyap" link3="Deep" date="26/11/23" likes="1M" bookmarks="420" citations="420" statusproject="Unverified" statusBackgroundColor="rgb(238, 238, 119)"></ProjCardSI>
                </div>
                <div className="proj-sub">
                                <ProjCardSI name="Project: Video Calling app" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            " link1="Mangalam" link2="Kashyap" link3="Deep" date="26/11/23" likes="1M" bookmarks="420" citations="420" statusproject="Unverified" statusBackgroundColor="rgb(238, 238, 119)"></ProjCardSI>
                </div>
                <div className="proj-sub">
                                <ProjCardSI name="Project: Video Calling app" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            " link1="Mangalam" link2="Kashyap" link3="Deep" date="26/11/23" likes="1M" bookmarks="420" citations="420" statusproject="Unverified" statusBackgroundColor="rgb(238, 238, 119)"></ProjCardSI>
            </div>
    </div>
    </div>
  )
  }catch(error){
    console.error(error);
    console.error("Error loading user data:", error);
    return <div>Error loading user data</div>;
  }
}
