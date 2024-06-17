import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export function Header (){
    return (
    <header className= {styles.header} >
    <ul className={styles.menu}>
        <li><Link to="./" className={styles.linkmenu}>HOME</Link></li>
        <li><Link  to="./Mission" className={styles.linkmenu}>MISSION</Link></li>
        <li><Link  to="./History" className={styles.linkmenu}>HISTORY</Link></li>
        <li><Link  to="./produto" className={styles.linkmenu}>PRODUTO</Link></li>
        <li><Link  to="./Contact" className={styles.linkmenu}>CONTATO</Link></li>
    </ul>
    </header>
        
    )
}


/*function Header (){
    return (
    <header className= {styles.header}>
    <ul className={styles.menu}>
     <li><a href="/">Home</a></li>
     <li><a href="/Mission">Mission</a></li>
     <li><a href="/History">History</a></li>
     <li><a href="/produto">Produto</a></li>
     <li><a href="/Contact">Contact</a></li>
    </ul>
    </header>
        
    )
}

export default Header*/