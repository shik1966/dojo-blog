import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    
    //let name = 'mario';

    /*const handleClick = () => {
        name = 'luigi';
        console.log(name);
    }*/

    const[blogs, setBlogs] = useState(null);
    const[isPending, setIsPending] = useState(true);
    const[error, setError] = useState(null);

   /* const[name, setName] = useState('Mario');

    const[age, setAge] = useState(25);


    const handleClick = () => {
        setName('Luigi');
        setAge(parseInt(Math.random()*50));
    } 

    /*const handleClick = (e) => {
    console.log('hello, ninjas');
    } */

    /*const handleClickAgain = (name, e) => {
    console.log('hello' + name, e.target);
    }*/ 

   

           /* {/*{<h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>

            {/*<{button onClick={handleClickAgain(' mario')}> Click me again</button>}
            <button onClick = {(e) => handleClickAgain(' marwan', e)}> Click me one last time</button>
            }*/

            /*{blogs.map((blog) =>(
                <div className="blog-preview" key ={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                </div>
            ))}*/

            const [name, setName] = useState('marwan');



           {/* const handleDelete = (id) => {
                const newBlogs = blogs.filter(blog => blog.id !== id);  
                setBlogs(newBlogs);
            }*/}

            useEffect(() => {
                setTimeout(() => {
                    fetch('http://localhost:8000/blogs')
                        .then(res => {
                            if (!res.ok) {
                                throw Error('Could not fetch the data for that resource!');
                            }
                            return res.json();
                        })
                        .then(data => {
                            console.log(data);
                            setBlogs(data);
                            setIsPending(false);
                            setError(false);
                        })
                        .catch(err => {
                            setError(err.message);
                            setIsPending(false);
                        });
                }, 1000);
            }, []);
            

            return ( 
                <div className="home">
                {error && <div>{error}</div>}
                {isPending && <div> loading...</div>}
                { blogs && <BlogList blogs = {blogs} title = "All Blogs!" /*handleDelete = {handleDelete}*/ />}
                {/*<button onClick= {() => setName('SIMO')}> change name </button>
                <p> {name} </p>*/}
                { blogs && <BlogList blogs = {blogs.filter((blog) => blog.author === 'marwan')} title = "Maro's Blogs!"/>}

            </div>  
            );

}
 
export default Home;