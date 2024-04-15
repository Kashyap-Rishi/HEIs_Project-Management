import React from 'react'
import { Dialog } from '@mui/material'
import { useForm, ValidationError } from '@formspree/react';

import './contactPage.css'

const ContactPage = ({open,setOpen}) => {
  const [state, handleSubmit] = useForm("xyyqnqwy");
  if (state.succeeded) {
      return <p style={{paddingTop:"6em"}}>Thanks for Reviewing!</p>;
  }
    const handleClose=()=>{
        setOpen(false);
    }
    
  return (
    <Dialog open={open} onClose={handleClose}>
        <div className="cnt_form">
<div className="banner">
<h1> Leave a review</h1>
</div>

    <form class=""  onSubmit={handleSubmit} action="https://formspree.io/f/xyyqnqwy"
  method="POST">

     <div className="dts">
     <div className="subdts1">
     <div className="subdivpara">
    <p>Name</p>
     </div>
     <div className="subdiv_input">
     <input type="text" placeholder="What's your name" name="name" size="30" id="cont" required/><br/>
      </div>
      </div>
      <div className="subdts2">
     <div className="subdivpara">
    <p>Rating</p>
     </div>
     <div className="subdiv_input">
     <input type="text" placeholder="Rate from 1-5" name="rating" size="30" id="cont" required/><br/>
      </div>
      </div>
      

</div>

<div className="dts">
   
      <div className="subdts3">
     <div className="subdivpara">
    <p>Report Plagiarism</p>
     </div>
     <div className="subdiv_input">
     <input type="text" placeholder="Tell us where have you seen this project before?" name="Plaigcheck" size="60" id="cont" required/><br/>
      </div>
      </div>
      

</div>
 



<div className="desc_text">
<textarea  placeholder='Tell us about your review' name="review" rows="5" cols="70"></textarea>
</div>



      
<button type="submit" disabled={state.submitting} class="registerbtn">Send Message</button> 

    


  </form>

        </div>
        
    </Dialog>
  )
}

export default ContactPage