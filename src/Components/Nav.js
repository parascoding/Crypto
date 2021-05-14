import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
const Nav = () => {
    return (
        <>
            <div className="link">

                <Link to="/Market"> View Market</Link>
                <Link to="/buyCoins"> Make a trade </Link>

            </div>
        </>
    )
}
export default Nav;