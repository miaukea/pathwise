import React from "react";
import { Link } from "react-router-dom"; // Optional: only if you're using React Router

const Navbar = () => {
return (
    <nav style={styles.nav}>
<h1 style={styles.logo}>My Blog</h1>
<ul style={styles.navLinks}>
        <li>
<Link to="/" style={styles.link}>Home</Link>
        </li>
        <li>
<Link to="/about" style={styles.link}>About</Link>
        </li>
        <li>
<Link to="/contact" style={styles.link}>Contact</Link>
        </li>
</ul>
    </nav>
);
};

const styles = {
nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "pink",
    color: "#fff",
    padding: "0.5rem 1rem",
},
logo: {
    margin: 0,
},
navLinks: {
    listStyle: "none",
    display: "flex",
    margin: 0,
    padding: 0,
},
link: {
    textDecoration: "none",
    color: "#fff",
    marginLeft: "1rem",
},
};

export default Navbar;
