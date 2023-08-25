import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <NavLink to={"/"}>Main</NavLink>
            <NavLink to={"/calendar"}>Calendar</NavLink>
        </>
    )
}

export default Nav;