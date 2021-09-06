import React, { useContext } from "react";
import {BookContext} from "../context/BookContext";

const Navbar = () => {
    const {books}= useContext(BookContext);

    return ( <div className="navbar">
        <h1>The Reading App</h1>
        <p>You have {books.length} to go through..</p>
    </div> );
}
 
export default Navbar;