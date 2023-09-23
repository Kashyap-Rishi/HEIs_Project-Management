import React from 'react'
import './codebox.css'
import { AiOutlineLink } from 'react-icons/ai';
import { CiViewList } from 'react-icons/ci';
import { AiFillLike } from 'react-icons/ai';
import { BsBookmarkFill } from 'react-icons/bs';
import { GoCodeReview } from 'react-icons/go';
import { DiJavascript } from 'react-icons/di';
import { BiLogoCss3 } from 'react-icons/bi';
import { DiReact } from 'react-icons/di';
import { SiPrisma } from 'react-icons/si';


const CodeBox = () => {
  return (
    <div className="parentcode">
        <div className="main-c-div">
     <div className="codeset">
        <div className="c-head"><h2>Code</h2></div>
        <hr className="code-set-hr"/>
        <div className="c-desc"> <a>Project Folder</a> <a>GitHub Link</a></div>
     </div>
     <div className="dataset">
        <div className="c-head"><h2>Datasets</h2></div>
        <hr className="code-set-hr"/>
        <div className="d-desc"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada varius elit vel faucibus. Etiam mattis risus eu purus sagittis, id pellentesque tortor rutrum. Duis ac sem risus.</p></div>
     </div>
     <div className="resultset">
        <div className="c-head"><h2>Results</h2></div>
        <hr className="code-set-hr"/>
        <div className="d-desc"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada varius elit vel faucibus. Etiam mattis risus eu purus sagittis, id pellentesque tortor rutrum. Duis ac sem risus.</p></div>
     </div>
     <div className="methodsset">
        <div className="c-head"><h2>Methods</h2></div>
        <hr className="code-set-hr"/>
        <div className="d-desc"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada varius elit vel faucibus. Etiam mattis risus eu purus sagittis, id pellentesque tortor rutrum. Duis ac sem risus.</p></div>
     </div>
     
   
     </div>
  <hr className="c-divider"/>
     <div className="sub-c-div">
        <div className="about-c">
            <div className="about-c-head"><h3>About</h3></div>
            
            <div className="para-c-head"><p>Project on Recent advances on large language models</p></div>
            <div className="ct-c"><div className="icons-c"><AiOutlineLink/></div><div className="icons-desc">sih-temp-nu.vercel.app</div></div>
            <div className="dw-c"><div className="icons-c"><CiViewList/></div><div className="icons-desc">Citations 190</div></div>
            <div className="lk-c"><div className="icons-c"><AiFillLike/></div><div className="icons-desc">Likes 30</div></div>
            <div className="bk-c"><div className="icons-c"><BsBookmarkFill/></div><div className="icons-desc">Bookmarks 14</div></div>
            <div className="rv-c"><div className="icons-c"><GoCodeReview /></div><div className="icons-desc">Reviews 10</div></div>
        </div>
        <hr className="code-set-hr"/>
        <div className="about-c-head"><h3>Languages</h3></div>
            
          
            <div className="ct-c"><div className="icons-c"><DiJavascript/></div><div className="icons-desc">Javascriot</div></div>
            <div className="dw-c"><div className="icons-c"><BiLogoCss3/></div><div className="icons-desc">Css</div></div>
            <div className="lk-c"><div className="icons-c"><DiReact/></div><div className="icons-desc">React</div></div>
            <div className="bk-c"><div className="icons-c"><SiPrisma/></div><div className="icons-desc">Prisma</div></div>

            <hr className="code-set-hr"/>
            <div className="about-c-head"><h3>Releases</h3></div>
            
            <div className="para-c-head"><p>No releases published</p></div>
     </div>
    </div>
  )
}

export default CodeBox