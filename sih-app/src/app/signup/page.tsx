import styles from "./signup.module.css"
import "./signup.css"
const Signup = () =>{
    return(
        <div className={styles.logingrandparent}>
            <div className={styles.loginparent}>
                <div className={styles.formdiv}>
                    <form className="flex flex-col formelemet">
                        <div className={styles.formheading}>Signup</div>
                        <div>
                        <input placeholder="Name" className={styles.username}></input>
                        </div>
                       <div>
                       <input placeholder="Email" className={styles.username}></input>
                       </div>
                       <div>
                       <input placeholder="College Name" className={styles.username}></input>
                       </div>
                       <div>
                       <input placeholder="Password" className={styles.username}></input>
                       </div>
                       <div className={styles.loginbuttondiv}>
                       <button className={styles.loginbutton}>Submit</button>

                       </div>

                    </form>
                    <div className={styles.donthaveacc}>Dont have a account? <p className={styles.createacc}>create an account.</p></div>
                </div>
            </div>
        </div>
    )
}

export default Signup;