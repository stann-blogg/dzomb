import { useState, useEffect } from "react";
import Bloglist from './BlogList';

const Home = () => {
     //eslint-disable-next-line 
    const [blogs, setBlogs] = useState([
        { tittle: 'my new website' , body: 'stan ran through all' , author: 'mario' , id: 1 },
        { tittle: 'my new website' , body: 'stan ran through all' , author: 'stanley' , id: 2 },
        { tittle: 'my new website' , body: 'stan ran through all' , author: 'mario' , id: 3 },

    ]
    );
   
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);

    }

    useEffect(() =>{
        console.log('use effect run');
        console.log('blogs');
    });

    return (
        <div className="home">
           <Bloglist blogs={blogs} tittle="All Blogs!"  handleDelete={handleDelete}/>
           {/* <Bloglist blogs={blogs.filter((blog) => blog.author === 'mario')} tittle="Mario's blogs" /> */}
        </div>

    );
}
 
export default Home;