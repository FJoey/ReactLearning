import UserGreeting from "./UserGreeting";

function App() {
    return( 
      <>
        <UserGreeting isLoggedIn={true} username="Big Man Blastoise"/>
        <UserGreeting isLoggedIn={true} />
      </>
    );
}

export default App
