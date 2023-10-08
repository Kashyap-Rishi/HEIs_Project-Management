import React from 'react'
import './cardsi.css'
import Link from 'next/link'
import { Category } from '@mui/icons-material';








interface props{
    id:Number,
    name:String,
    description:String,
    link1:String,
    link2:String,
    link3:String,
    date:String,
    likes:String,
    bookmarks:String,
    citations:String,
    statusproject:String,
    statusBackgroundColor:string
}





const ProjCardSI = (props:props) => {
    try{
    const statusStyle = {
        backgroundColor: props.statusBackgroundColor || 'transparent', 
      };
      
    
  return (
    <div className="ProjCardGrandparent2">
    <div className="projparent2">
        <div className="poj-head">
            <div>
        <h2 >
           <Link className="inact-link" href={`/projects/[id]/unverified`} as={`/projects/${props.id}/unverified`}> {props.name}</Link>
        </h2>
        </div>
       
        <div className="status" style={statusStyle}><span>{props.statusproject}</span></div>
        </div>
        <div  className="links2">
           <div><a>{props.link1}</a></div>
            <div><a>{props.link2}</a></div>
            <div><a>{props.link3}</a></div>
        </div>
        <div className="description2">
            {props.description}
        </div>
        <div  className="datelikesbookmarks2">
        <div className="date">
            Published on {props.date}
        </div>
        <div className="likes2">
            <div >{props.likes} Likes</div>
        </div>
        <div className="bookmarks2">
            {props.bookmarks} Bookmarks
        </div>
        <div className="citations2">
            {props.citations} Citations
        </div>
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

export default ProjCardSI