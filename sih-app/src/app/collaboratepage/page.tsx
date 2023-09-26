"use client"
import styles from  "./collaborate.module.css"
import "./collaborate.css"
import { useForm, ValidationError } from '@formspree/react';


const Collaborate = () =>{
    const [state, handleSubmit] = useForm("xpzgygqj");
    if (state.succeeded) {
        return <div> <p style={{paddingTop:"6em",width:"85%",margin:"0 auto"}}>Mail Sent!</p>
        <br></br>
        <a href="/collaboratepage"><button>Go Back</button></a></div>;
    }
    return(
        <div className={styles.CollaborateGrandParent}>
            <div className={styles.CollaborateParent}>
                <div className={styles.collaborateHead}>Collaborate with Us.</div>
                <div className={styles.collaborateSubhead}>Lets try to make this project bigger and better.</div>
                <div>
                <div style={{display:"flex",gap:"5em", marginBottom:"2em"}}>
                <div className={styles.rightcontactform} >
                       
                        <form className={styles.contform} action="https://formspree.io/f/xpzgygqj" onSubmit={handleSubmit} method="POST">
                            <div className={styles.set1form}>
                                <input placeholder="Enter First Name" name="First name"></input>
                                <input placeholder="Enter Last Name" name="Last name"></input>
                            </div>
                            <div className={styles.set1form}>
                                <input placeholder="Email" type="email" name="Email"></input>
                                <input placeholder="Phone Number" type="text" name="Pone Number"></input>
                            </div>
                            <textarea cols={55} rows={8} placeholder="Message" name="Message"></textarea>
                            <button className={styles.contsubmitbut} type="submit" disabled={state.submitting}>Send</button>
                        </form>
                        
                    </div>
                    <div className={styles.aboutCollaborations}>
                            <div className={styles.aboutCollaborationHead}>How to Collaborate ?</div>
                            <div>
                                <div className={styles.option}>
                                    <div className={styles.option1}>
                                       <div className={styles.option1Head}> Fill the Collaboration Form</div>
                                    <div className={styles.stepsofform}>
                                        <ul>
                                            <li>If you prefer to communicate via email, locate and click on the "Collaborate" button or form on the project page.</li>
                                            <li>Fill in the required information, including your name, email address, and a brief message outlining your interest and how you can contribute.</li>
                                            <li>Click the submit button. Your details will be sent to the project owner.</li>
                                        </ul>
                                      
                                    </div>
                                    <div className={styles.option2}>
                                       <div className={styles.option1Head}>  Real-Time Chatting</div>
                                    <div className={styles.stepsofform}>
                                        <ul>
                                            <li>if you want to engage in real-time discussions with the project owner or team members, look for the "Chat Now" button or widget on the project page.</li>
                                            <li>Click on it to enter the project's chat room.</li>
                                            <li>Start a conversation with the project owner or join ongoing discussions related to the project.</li>
                                        </ul>
                                      
                                    </div>
                                    </div>
                                    <div className={styles.option3}>
                                       <div className={styles.option1Head}> Video Chatting</div>
                                    <div className={styles.stepsofform}>
                                        <ul>
                                            <li>For more interactive and face-to-face collaboration, explore the "Video Chat" feature on the project page.</li>
                                            <li>Initiate a video call or join a scheduled meeting with the project owner or team members.</li>
                                            <li>Use this opportunity to discuss project details, clarify doubts, or brainstorm ideas.</li>
                                        </ul>
                                      
                                    </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                </div>
                </div>
                <div className={styles.RealTimeChatSection}>
                    <div className={styles.realtimechat}>
                        <div>
                           <img src="images/chat2.png" className={styles.chatimage}></img> 
                        </div>
                        <div>
                          <div className={styles.realchatHead}>Lets Chat!!</div>
                        <div className={styles.reachatsubhead}>Chat with us so that we can colllaborate.<br/><a href="https://video-calling-web-app-v1.vercel.app/" className={styles.clickhere}>Click Here.</a></div>  
                        </div>
                        
                    </div>
                    <div className={styles.rightSideChatapp}> 
                        <div className={styles.BannerHead}>
                            Chat With Us 
                        </div>
                        <div className={styles.BannerSubHead}>
                            Tell Us What is in Your Mind.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Collaborate;