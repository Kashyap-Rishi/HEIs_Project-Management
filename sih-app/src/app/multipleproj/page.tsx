import styles from "./multiproj.module.css"
import "./multiproj.css"
import Univeristy from "@/components/Universityset/University";
import Link from "next/link";
const multiproj = () =>{
    return(
        <div className={styles.multiprojgrandparent}>
            <div className={styles.multi}>
                <div>
                    <div className={styles.multihead}>
                        University and Departments
                    </div>
                    <div className={styles.multiprojsubhead}>Shown below is a list of universities and the Departments and sub-communities within them. Click on a name to view that University or collection home page.</div>
                    <div className={styles.universitiesandprojects}>
                        <Univeristy Universityname="IIIT Nagpur" Course1="BTECH - Bachelor of Technology" Course2="PHD - Doctor of Philosophy" Course3="MTECH - Masters of Technology"/>
                        <Univeristy Universityname="Vellore Institute of Technology" Course1="BTECH - Bachelor of Technology" Course2="PHD - Doctor of Philosophy" Course3=" LLB - Bachelor of Laws"/>
                        <Univeristy Universityname="IIT Bombay" Course1="BTECH - Bachelor of Technology" Course2="PHD - Doctor of Philosophy" Course3="MTECH - Masters of Technology"/>
                        <Univeristy Universityname="IIT Delhi" Course1="BTECH - Bachelor of Technology" Course2="PHD - Doctor of Philosophy" Course3="MTECH - Masters of Technology"/>
                        <Univeristy Universityname="Manipal Institute of Technology" Course1="BTECH - Bachelor of Technology" Course2="PHD - Doctor of Philosophy" Course3=" LLB - Bachelor of Laws"/>
                        <Univeristy Universityname="KIIT" Course1="BTECH - Bachelor of Technology" Course2="PHD - Doctor of Philosophy" Course3="MTECH - Masters of Technology"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default multiproj;