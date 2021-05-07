import {Link, NavLink} from 'react-router-dom'

const NavBar = () => {

    //
    //  does a hard reload

    // return (
    //     <nav className="nav-wrapper red darken">
    //         <div className="container">
    //             <a href="/" className="brand-logo">Our Awesome React Router App</a>
    //         </div>
    //         <ul className="right">
    //             <li><a href="/">Home</a></li>
    //             <li><a href="/about">About</a></li>
    //             <li><a href="/contact">Contact</a></li>
    //         </ul>
    //     </nav>
    // )

    //
    //  single page app

    return (
        <nav className="nav-wrapper red darken">
            <div className="container">
                <Link to="/" className="brand-logo">Our Awesome React Router App</Link>
            </div>
            <ul className="right">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar;