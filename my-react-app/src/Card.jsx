import profilePic from './assets/dp.jpg'


function Card(){

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className='card-title'>Big Man Blastoise</h2>
            <p className='card-text'>Being the very moist and I lift heavy circles</p>
        </div>
    );
}

export default Card