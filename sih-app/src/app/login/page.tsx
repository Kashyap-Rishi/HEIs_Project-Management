import styles from "./login.module.css"
import "./login.css"
import Link from "next/link"

const Login = () =>{
    return(
        <div className={styles.logingrandparent}>
            <div className={styles.loginparent}>
                <div className={styles.formdiv}>
                    <form className="flex flex-col formelemet">
                        <div className={styles.formheading}>Login</div>
                        <div>
                        <input placeholder="Username" className={styles.username}></input>
                        </div>
                       <div>
                       <input placeholder="Password" className={styles.password}></input>
                       </div>
                       <div className={styles.loginbuttondiv}>
                       <button className={styles.loginbutton}>Submit</button>

                       </div>

                    </form>
                    <div className={styles.donthaveacc}>Dont have a account? <p className={styles.createacc}><Link href="/signup">create an account.</Link></p></div>
                </div>
            </div>
        </div>
    )
}

export default Login;