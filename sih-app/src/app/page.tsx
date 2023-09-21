import Recommendation from "@/components/Recommendation/Recommendation";
import "./globals.css"
import styles from "./home.module.css"
import Image from 'next/image'
const Home=()=> {
  return (
    <div className={styles.grandparent}>
        <form className="flex justify-center gap-3 align-middle">
            <input className={styles.search_bar} placeholder="Search Your Project"></input>
            <img className={styles.searchimg}src="images/search.png" width="40px" height="10px"></img>

        </form>
        <div className={styles.filters_parent}>
            <div className="flex  mb-4">
                <div className="mr-3 font-semibold">Year Range:</div>
                <div className="flex gap-3 ml-20">
                <input className="w-12 rounded"></input>
                <div>-</div>
                <input className="w-12 rounded"></input>
                </div>
            </div>
            <div className="flex mb-4">
              <div className="pr-20 font-semibold">College:</div>
              <input className="rounded w-8/12 ml-10 h-8" placeholder="  College Name"></input>
            </div>
            <div className="flex mb-4">
              <div className="pr-3 font-semibold">Subject Heading:</div>
              <input className="rounded w-8/12 ml-10 h-8" placeholder="  Subject Name"></input>
            </div>
            <div className="flex mb-4">
              <div className="pr-20 mr-1 font-semibold">Author:</div>
              <input className="rounded w-8/12 ml-10 h-8" placeholder="  Author Name"></input>
            </div>
            <div>
              <div className="mb-4 font-semibold">Sort :-</div>
              <div className="flex gap-10">
                    <div className="flex justify-center align-middle gap-2">
                      <div><input type="radio" className={styles.radio}></input></div>
                    <div className="font-semibold">Likes</div>
                    </div>
                    <div className="flex justify-center align-middle gap-2">
                      <div><input type="radio" className={styles.radio}></input></div>
                    <div className="font-semibold">Bookmarks</div>
                    </div>
                    <div className="flex justify-center align-center gap-2">
                      <div><input type="radio" className={styles.radio}></input></div>
                    <div className="font-semibold">Citation</div>
                    </div>
                    
              </div>
            </div>

        </div>

        <Recommendation/>
    </div>
  )
}
export default Home;
