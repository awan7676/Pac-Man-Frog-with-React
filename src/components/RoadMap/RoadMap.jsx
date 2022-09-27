import React from 'react';
import './RoadMap.css';

function RoadMap() {
    return (
        <div className='road-map'>
            <img className='road-map-background-img' src="/img/roadmap-bg.png" alt="roadmap-bg.png" />
            <div className='road-map-main-heading'>
                <span className='road-map-uncolored-heading'>
                    Pac-man Frog
                    <span className='road-map-colored-heading'>Roadmap</span>
                </span>
                <span className='road-map-description'>
                    We have outlined a
                    strong and future-proof roadmap to foster the development of our ecosystem.
                </span>
            </div>
            <div className='road-map-img'>
                <img className='road-map-img-large' src="/img/roadmap-lg.png" alt="roadmap-lg.png" />
                <img className='road-map-img-small' src="img/roadmap-sm.png" alt="roadmap-sm.png" />
            </div>
        </div>
    )
}

export default RoadMap