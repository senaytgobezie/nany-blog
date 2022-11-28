import { useState } from "react";

const Home = () => {

const [blogs, setBlogs]=useState([
 { title: 'My new website', body: 'lorem ipsum...', author: 'mar', id: 1 },
{ title: 'Welcome party!', body: 'lorem ipsum...', author: 'kali', id: 2 },
{ title: 'My pink friday', body: 'lorem ipsum...', author: 'nany', id: 3 }]);


const handleClick =() =>{

    }

    return ( 
        <div className="home">
            { blogs.map((blog) =>(
                <div className="blog-preview" key={blog.id} >
                   <h2>{blog.title}</h2>
                   <p> Written by {blog.author}</p>
                </div>))}

        </div>
     );
}
 
export default Home;