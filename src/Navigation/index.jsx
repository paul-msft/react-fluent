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
            label: 'Home',
            url: '/'
        },
        {
            label: 'API',
            url: '/api'
        },
        {
            label: 'About',
            url: '/about'
        }
    ];

    return (
        <nav>
            <div className={styles.items}>
            {renderLinks(links)}
            {/* <LogoutButton /> */}
            </div>
        </nav>
    )
}