const NavBar = () => {
    return ( 
        <nav>
            <div className="header-container">
                <h1 className="logo">NETFLIX<br />REVIEWS</h1>
                <ul>
                    <li className="home"><a href="/">HOME</a></li>
                    <li className="addReview"><a href="/addReview">ADD REVIEW</a></li>
                </ul>
            </div>
        </nav>
     );
}
 
export default NavBar;