import React from 'react'
import { Dialog } from '@mui/material'
import './contactPage.css'

const ContactPage = ({open,setOpen}) => {
    const handleClose=()=>{
        setOpen(false);
    }
    
  return (
    <Dialog open={open} onClose={handleClose}>
        <div className="cnt_form">
<div className="banner">
<h1> Leave a review</h1>
</div>

    <form class="" action="/" method="post">

     <div className="dts">
     <div className="subdts1">
     <div className="subdivpara">
    <p>Name</p>
     </div>
     <div className="subdiv_input">
     <input type="text" placeholder="What's your name" name="email" size="30" id="cont" required/><br/>
      </div>
      </div>
      <div className="subdts2">
     <div className="subdivpara">
    <p>Rating</p>
     </div>
     <div className="subdiv_input">
     <input type="text" placeholder="Rate from 1-5" name="email" size="30" id="cont" required/><br/>
      </div>
      </div>
      

</div>
 
<div className="desc_text">
<textarea  placeholder='Tell us about your review' rows="7" cols="70"></textarea>
</div>



      
<button type="submit" class="registerbtn">Send Message</button> 

    


  </form>

        </div>
        
    </Dialog>
  )
}

export default ContactPage