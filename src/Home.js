import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

const [blogs, setBlogs]=useState([
 { title: 'My new website', body: 'lorem ipsum...', author: 'nany', id: 1 },
{ title: 'Welcome party!', body: 'lorem ipsum...', author: 'kali', id: 2 },
{ title: 'My pink friday', body: 'lorem ipsum...', author: 'nany', id: 3 }]);


const handleDelete= (id) =>{
const newBlogs = blogs.filter(blog=> blog.id !== id);
setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
           <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} /> 
           {/* <BlogList blogs={blogs.filter( (blog)=> blog.author=== 'nany' )} title="nany's Blogs" />  */}

           {/* this is the props */}
        </div>
     );
}
 
export default Home;