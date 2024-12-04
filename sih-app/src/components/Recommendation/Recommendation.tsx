import ProjectCard from "../ProjCard/ProjectCard"
import styles from "./recommendation.module.css"
const Recommendation = () =>{
    return(
        <div>
            <div style={{margin:"0 auto",width:"80%",marginBottom:"0.5em" ,paddingBottom:"1em"}}>
            <h1 className="text-3xl  ">Based On Your Interest</h1> 
            </div>
            <div className={styles.Cardsetparent}>
            <ProjectCard  name="Project: Video Calling app" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            " link1="Kashyap" link2="Anderson" link3="James" date="26/11/23" likes="1M" bookmarks="420" citations="420"></ProjectCard>
         
                        <ProjectCard name="Project: Lorem Ipsum Generator app" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            " link1="Mangalam" link2="Ricky" link3="Michael" date="26/11/23" likes="1M" bookmarks="420" citations="420"></ProjectCard>
          
                                    <ProjectCard name="Satvika: Real Estate Company Website" description="Satvika ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            " link1="Deep" link2="Sophia" link3="Henry" date="26/11/23" likes="2M" bookmarks="550" citations="2320"></ProjectCard>
            </div>
        </div>
    )
}
export default Recommendation