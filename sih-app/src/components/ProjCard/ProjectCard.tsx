import styles from "./card.module.css"
interface props{
    name:String,
    description:String,
    link1:String,
    link2:String,
    link3:String,
    date:String,
    likes:String,
    bookmarks:String,
    citations:String
}
const ProjectCard  =(props:props)=>{
   
    return(
    <div className="ProjCardGrandparent">
        <div className={styles.projparent}>
            <h2 className="text-xl font-extrabold mb-2">
                {props.name}
            </h2>
            <div id={styles.links} className="flex gap-3 underline mb-2">
                <a>{props.link1}</a>
                <a>{props.link2}</a>
                <a>{props.link3}</a>
            </div>
            <div id={styles.description} className="mb-2">
                {props.description}
            </div>
            <div id={styles.datelikesbookmarks} className="flex gap-5">
            <div className={styles.date}>
                Published on {props.date}
            </div>
            <div className={styles.likes}>
                <div className="font-bold">{props.likes} Likes</div>
            </div>
            <div className={styles.bookmarks}>
                {props.bookmarks} Bookmarks
            </div>
            <div className={styles.citations}>
                {props.citations} Citations
            </div>
            </div>
            
        </div>
    </div>
    );
}
 
export default ProjectCard;