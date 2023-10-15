import React from 'react'
import './cardrejected.css'
import Link from 'next/link'

interface props{
    id:Number,
    name:String,
    description:String,
    link1:String,
    link2:String,
    link3:String,

    statusproject:String,
    statusBackgroundColor:string
}

const ProjCardRejected = (props:props) => {
    const statusStyle = {
        backgroundColor: props.statusBackgroundColor || 'transparent', 
      };
    
  return (
    <div className="ProjCardGrandparent2">
    <div className="projparent2">
        <div className="poj-head">
            <div>
        <h2 >
        <Link className="inact-link" href={`/projects/[id]/verified`} as={`/projects/${props.id}/rejected`}> {props.name}</Link>
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
            Status : Not published
        </div>

        </div>
        
    </div>
</div>
  )
}

export default ProjCardRejected