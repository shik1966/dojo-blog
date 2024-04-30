import { useState } from "react";
const Home = () => {
    
    //let name = 'mario';

    /*const handleClick = () => {
        name = 'luigi';
        console.log(name);
    }*/

    const[name, setName] = useState('Mario');

    const[age, setAge] = useState(25);


    const handleClick = () => {
        setName('Luigi');
        setAge(parseInt(Math.random()*50));
    } 

    /*const handleClick = (e) => {
    console.log('hello, ninjas');
    } */

const handleClickAgain = (name, e) => {
    console.log('hello' + name, e.target);
} 

    return (  
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>

            {/*<{button onClick={handleClickAgain(' mario')}> Click me again</button>}*/}
            <button onClick = {(e) => handleClickAgain(' marwan', e)}> Click me one last time</button>

        </div>  
    );
}
 
export default Home;