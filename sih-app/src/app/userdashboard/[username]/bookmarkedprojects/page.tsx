import React from 'react'
import Link from 'next/link';
import './bookproj.css'
import Image from 'next/image';

import ProjCardSI from '../../../../components/ProjCardSI/ProjCardSI';
const BookmarkProjects = () => {
  return (
    <div className="main-user">
        <div className="inst-title">
           <div className="overview"><span><Link className="unverif" href="/userdashboard/kashyap/userprojects">Projects</Link></span></div>
           <div><span><Link className="unverif" href="/userdashboard/kashyap/likedprojects">Liked (10)</Link></span></div>
           <div><span><Link className="verif" href="/userdashboard/kashyap/bookmarkedprojects">Bookmarked (10)</Link></span></div>
        </div>
<div className="sub-user">
        <div className="user-display">
            <div className="img-sec"> 
            <Image src="/images/coll-m.png" alt="" width={150} height={150} className="user-img"/>
            </div>
           
            <div className="user-name">
                <div className="user-foll">Dr. John Doe</div>
                <div className="user-foll2">
                    <div className="deg1">B.Tech CSE 2021-2025</div>
                    <div className="deg2">IIIT Nagpur</div>
                     <div className="deg-desc"><p>Passionate researcher exploring the intersections of technology and human behaviour to drive innovative solutions.</p></div>
                    <div className="main-sub-fl">
                    <div className="sub-fl"><span>34</span>Followers</div>
                    <div className="sub-fl"><span>10</span>Followings</div>
                
                    </div>
                    </div>
            </div>
        </div>
      
    
        <div className="projs-sec-user">
        <div className="user-publish">
            <div className="user-hd-publish"><h2>Research Papers and Projects</h2></div>

        </div>
            <div className="proj-sub-user">
                    <ProjCardSI name="Project: Video Calling app" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            " link1="Mangalam" link2="Kashyap" link3="Deep" date="26/11/23" likes="1M" bookmarks="420" citations="420" statusproject="" statusBackgroundColor=""></ProjCardSI>
            </div>
            <div className="proj-sub-user">
                                <ProjCardSI name="Project: Video Calling app" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            " link1="Mangalam" link2="Kashyap" link3="Deep" date="26/11/23" likes="1M" bookmarks="420" citations="420" statusproject="" statusBackgroundColor=""></ProjCardSI>
                </div>
                <div className="proj-sub-user">
                                <ProjCardSI name="Project: Video Calling app" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            " link1="Mangalam" link2="Kashyap" link3="Deep" date="26/11/23" likes="1M" bookmarks="420" citations="420" statusproject="" statusBackgroundColor=""></ProjCardSI>
                </div>
                <div className="proj-sub-user">
                                <ProjCardSI name="Project: Video Calling app" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            " link1="Mangalam" link2="Kashyap" link3="Deep" date="26/11/23" likes="1M" bookmarks="420" citations="420" statusproject="" statusBackgroundColor=""></ProjCardSI>
            </div>
    </div>
    </div>
    </div>
  )
}

export default BookmarkProjects