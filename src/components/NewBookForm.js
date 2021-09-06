import React, { useContext, useState } from "react";
import {BookContext} from "../context/BookContext";

const NewBookForm = () => {
    const {dispatch} = useContext(BookContext);
    const [title,setTitle] = useState("");
    const [author,setAuthor] = useState("");

    function handleSubmit(e){

    e.preventDefault();
    dispatch({type:"ADD_BOOK",book:{
        title,author
    }});
    setTitle("");
    setAuthor("");

    }
    return ( <div>
              <form onSubmit={handleSubmit}>
                  <input type="text" placeholder="Title" value={title} 
                  onChange={(e)=>setTitle(e.target.value)}></input>
                  <input type="text" placeholder="Author" value={author}
                   onChange={(e)=>setAuthor(e.target.value)}></input>
                   {/* <button type="submit">Add Book</button> */}
                   <input type="submit" value="add book"></input>
              </form>
    </div> );
}
 
export default NewBookForm;