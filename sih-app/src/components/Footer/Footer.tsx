import './footer.css'
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";


const Footer = () => {
  return (
    <div className="footer-sec">

      <div className="footerparent">

       <div className="footer-header">
<h1>R2P2</h1>
          <hr/>
        </div>
    <div className="main">
      
      <div className="col_main">
      <div className="col_sub1">
      <div className="logo-row">
    
        <div className="logo-des">
          <h3>Office</h3>
          
          <p >Road no - 6, Waranga Colony beside New Bridge, Nagpur-800024</p>
          <a href="#">manikmaity.haker2003@gmail.com</a>
          <p >+91 90545841512</p>
        </div>
        <div className="s_tags">
        <span><AiOutlineInstagram/></span>
        <span><AiOutlineTwitter/></span> 
        <span><BsFacebook/></span>
        </div>
        
        
      </div>
      </div>
      
      <div className="col_sub2">
      <div className="link-row">
        <div className="footer-header_sub">
          <h3>Quick Links</h3>
        </div>
        <div className="link-des">
        <a href="#" className="footer-links">Home</a>
          <a href="#" className="footer-links">About Us</a>
          <a href="#" className="footer-links">Projects</a>
          <a href="#" className="footer-links">Gallery</a>
          <a href="#" className="footer-links">Contact Us</a>
        </div>
      </div>
      
      
      <div className="link-row">
        <div className="footer-header_sub">
          <h3>Featured</h3>
        </div>
        
        <div className="link-des">
          <a href="#" className="footer-links">Top</a>
          <a href="#" className="footer-links">Trending</a>
          <a href="#" className="footer-links">Research</a>
          <a href="#" className="footer-links">AI/ML</a>
         
        </div>
        
      </div>
      </div>
      <div className="col_sub3">
      <div className="link-row">
        <div className="footer-header_sub">
          <h3>Projects</h3>
        </div>
        
        <div className="link-des">
          <a href="#" className="footer-links">Under Graduates</a>
          <a href="#" className="footer-links">Post Graduates</a>
       
        </div>
        
      </div>
      </div>
</div>
      
      
    </div>
    <div className="disclaimer">
      <div className="head_disc">
        <h3>Disclaimer</h3>
      </div>
       <div className="para_disc">
       <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et corrupti quos dolores</p>
       </div>
    </div>

    <div className="copyright_main">
    <hr className="f2_hr"/>
    
    <div className="col-12">
            <span className="copyright"
              >©Copyright 2023-2026 SIH Group_Mugglers. All Rights Reserved | Designed with Mugglers</span
            >

          </div>
    </div>
</div>
    </div>
  )
}

export default Footer