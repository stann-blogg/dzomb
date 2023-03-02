const Bloglist = ({ blogs, tittle, handleDelete}) => {
    // const blogs = props.blogs;
    // const tittle = props.tittle;
    
    // console.log(props,blogs);



    return (
        <div className="blog-list">
            <h2>{tittle}</h2>
            {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{ blog.tittle }</h2>
                <p>written by { blog.author }</p>
                <button onClick={() => handleDelete(blog.id)}>delete blog</button>

            </div>
           ))}
            
        </div>
    );
}
export default Bloglist;