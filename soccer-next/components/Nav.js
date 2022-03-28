import Link from "next/link";
import styles from "../styles/Layout.module.css"

export default function Nav(){
    return(
        <nav className={styles.nav}>
        <ul>
        <li className={styles.li}><Link href='/'>Home</Link></li>
        <li className={styles.li}><Link href='/basic/bmi'>Bmi</Link></li>
        <li className={styles.li}><Link href='/basic/calc'>Calculator</Link></li>
        <li className={styles.li}><Link href='/basic/counter'>Counter</Link></li>
        <li className={styles.li}><Link href='/basic/grade'>Grade</Link></li>
        <li className={styles.li}><Link href='/basic/login'>Login</Link></li>
        </ul>
        </nav>
    )
}