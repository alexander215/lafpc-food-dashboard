import React from 'react';
import HomeTextPoints from '../HomeTextPoints';
import VideoComponent from '../VideoComponent';
import SingleGraph from '../SingleGraph';


const Home = () => {
    return (
        <div> 
            <SingleGraph />
            <HomeTextPoints />
            <VideoComponent />
        </div>

    )
}

export default Home;