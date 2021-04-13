const logInOut = () => {

    const [user, setUser] = useState({});
    useEffect(() => {
        { /*
        setInterval was used in order to refresh the page constantly
    in order to have the "logout" button show immediately in place of
    "login", as soon as user logs out.
    */}
        setInterval(() => {
            const userString = localStorage.getItem("user");
            const user = JSON.parse(userString);
            setUser(user);
        }, [])
    }, 5000);


    const logout = () => {
        return localStorage.removeItem("user");
    }

    if (!user) {
        return (
            <div className="navbar-nav ml-auto">
                <Link to="/login" className="nav-item nav-link">Login</Link> <span
                    className="nav-item nav-link">|</span> <Link to="/SignUp" className="nav-item nav- 
link">Sign Up</Link>
            </div>
        )
    }
    if (user) {
        return (
            <div className="navbar-nav ml-auto">
                <Link to="/" className="nav-item nav-link" onClick={logout}>Logout</Link>
                <Avatar img="/images/Eat-healthy.jpg" />
            </div>
        )
    }


}


export default NavBarUser;