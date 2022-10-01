import React from 'react';
import Styles from './RoadMap.module.css';

function RoadMap() {
    return (
        <div className={Styles.road_map} id='road_map_id'>
            <img className={Styles.road_map_background_img} src="/img/roadmap-bg.png" alt="roadmap-bg.png" />
            <div className={Styles.main_heading}>
                <span className={Styles.uncolored_part}>
                    Pac-man Frog
                    <span className={Styles.colored_part}>Roadmap</span>
                </span>
                <span className={Styles.description}>
                    We have outlined a
                    strong and future-proof roadmap to foster the development of our ecosystem.
                </span>
            </div>
            <div className={Styles.road_map_img}>
                <img className={Styles.road_map_img_large} src="/img/roadmap-lg.png" alt="roadmap-lg.png" />
                <img className={Styles.road_map_img_small} src="img/roadmap-sm.png" alt="roadmap-sm.png" />
            </div>
        </div>
    )
}

export default RoadMap