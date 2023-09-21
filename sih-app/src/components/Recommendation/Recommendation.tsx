import ProjectCard from "../ProjCard/ProjectCard"

const Recommendation = () =>{
    return(
        <div>
            <div style={{margin:"0 auto",width:"80%",marginBottom:"0.5em"}}>
            <h1 className="text-2xl font-bold">Based On Your Interest</h1> 
            </div>
            
            <ProjectCard name="Project: Video Calling app" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            " link1="mangalam" link2="kashyap" link3="deep" date="26/11/23" likes="1M" bookmarks="420" citations="420"></ProjectCard>
                        <ProjectCard name="Project: Lorem Ipsum Generator app" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            " link1="mangalam" link2="kashyap" link3="deep" date="26/11/23" likes="1M" bookmarks="420" citations="420"></ProjectCard>
                                    <ProjectCard name="Satvika: Real Estate Company Website" description="Satvika ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            " link1="mangalam" link2="kashyap" link3="Abhinav" date="26/11/23" likes="2M" bookmarks="550" citations="2320"></ProjectCard>
        </div>
    )
}
export default Recommendation