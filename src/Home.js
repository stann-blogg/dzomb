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
    const [isPending, setIsPending] = useState(true);

    const [name, setName] = useState('mario');
   
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);

    }

    useEffect(() => {
        setTimeout(() => {
            
        });
        console.log('use effect ran');
        setIsPending(false);
    }, []);

    return (
        <div className="home">
            {isPending && <div>loading...</div>}
           <Bloglist blogs={blogs} tittle="All Blogs!"  handleDelete={handleDelete}/>
           <button onClick={() => setName('luigi')}>change name</button>
        <p>{name}</p>
           {/* <Bloglist blogs={blogs.filter((blog) => blog.author === 'mario')} tittle="Mario's blogs" /> */}
        </div>

    );
}
 
export default Home;