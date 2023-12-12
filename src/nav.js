import { Link, useLocation } from 'react-router-dom';
import './nav.css';

function Nav() {
    const { pathname } = useLocation();
    // const linkStyle = { color: 'white' };
    return (
        <nav className="nav nav-tabs mt-2">
            <Link
                to="/Labs/a3"
                className={`nav-link ${pathname.includes('assignment3') ? 'active' : ''}`}
            >
                A3
            </Link>
            <Link
                to="/Labs/a4"
                className={`nav-link ${pathname.includes('assignment4') ? 'active' : ''}`}
            >
                A4
            </Link>
            <Link
                to="/Labs/a5"
                className={`nav-link ${pathname.includes('a5') ? 'active' : ''}`}
            >
                A5
            </Link>

            <Link
                to="/Kanbas"
                className={`nav-link ${pathname.includes('Kanbas') ? 'active' : ''}`}
            >
                Kanbas
            </Link>
        </nav>
    );
}
export default Nav;