// import LogoutButton from "../LogoutButton";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export default function GuildPage() {

    function renderLinks(links) {
        return links.map((item, index) => (
             <Link className={styles.navItem} key={index} to={item.url}>{item.label}</Link>
        ));
    }

    const links = [
        {
            label: 'API',
            url: '/api',
        },
    ];

    return (
        <nav>
            <div className={styles.items}>
            <Link className={styles.navItem} to="/">
                 {/* <img className src="/eng.svg" />  */}
            </Link>
            {renderLinks(links)}
            {/* <LogoutButton /> */}
            </div>
        </nav>
    )
}