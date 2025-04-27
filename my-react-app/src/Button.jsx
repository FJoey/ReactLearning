function Button(){
    const styles={
            backgroundColor: "hsl(200, 100%, 50%)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
    }

    const handleClick = (e) => e.target.textContent = "OUCH!";
    return(<button onDoubleClick={(e) => handleClick(e)}>Click me</button>);

    /*
    let count = 0;
    const handleClick = (name) => {
        if (count < 3){
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        } else {
            console.log(`${name} stop clicking me!`);
        }
    }
    */

    //const handleClick = () => console.log("OUCH!");

    // const handleClick2 = (name) => console.log(`${name} stop clicking me`);

    // return(<button onClick={() => handleClick2("Big Man Blastoise")} style={styles}>Click Me</button>);

    // return(<button onClick={() => handleClick("Big Man Blastoise")} style={styles}>Click Me</button>);
}

export default Button