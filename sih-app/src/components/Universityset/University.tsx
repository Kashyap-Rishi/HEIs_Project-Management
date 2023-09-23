import styles from "./university.module.css"
import "./university.css"
import Link from "next/link"


interface props{
    Universityname: String,
    Course1: String,
    Course2: String,
    Course3: String,
}

const Univeristy =(props:props) =>{
    return(
        <div className={styles.Universitygrandparent}>
            <div className={styles.universityparent}>
                <div className={styles.UniversityHead}>{props.Universityname}</div>
                <div className={styles.CourseSet}>
                <Link href="/multipleproj/IIITN-Btech" className={styles.Links}><div className={styles.course1}>{props.Course1}</div></Link>
                <Link href="/multipleproj/Mtech" className={styles.Links}><div className={styles.course1}>{props.Course2}</div></Link>
                <Link href="/multipleproj/Phd" className={styles.Links}><div className={styles.course1}>{props.Course3}</div></Link>
                </div>
            </div>
        </div>
    )
}

export default Univeristy;
