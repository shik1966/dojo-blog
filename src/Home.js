const Home = () => {

const handleClick = (e) => {
    console.log('hello, ninjas');
} 

const handleClickAgain = (name, e) => {
    console.log('hello' + name, e.target);
} 

    return (  
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={handleClickAgain(' mario')}> Click me again</button>
            <button onClick = {(e) => handleClickAgain('hello', e)}> Click me one last time</button>
        </div>
    );
}
 
export default Home;