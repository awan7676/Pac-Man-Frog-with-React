import React from 'react';
import Styles from './PowerOfPac.module.css';
import PowerOfPacCard from '../PowerOfPacCard/PowerOfPacCard';
function PowerOfPac() {
    return (
        <div className={Styles.power_of_pac} id='power-of-pac-id'>
            <div className={Styles.main_heading}>
                <span className={Styles.uncolored_part}>
                    Power of
                    <span className={Styles.colored_part}>
                        $PAC
                    </span>
                </span>
                <span className={Styles.description}>
                    $PAC
                    is the governance token for the Pacman Frog DAO allowing holders to vote on the future
                    development of the project. Since our project is community-driven, $PAC aims to evolve as a
                    premier community token with diverse use cases across the NFTs, GameFi, DeFi, and much
                    more.
                </span>
            </div>
            <div className={Styles.content}>
                <PowerOfPacCard name="Governance Rights" />
                <PowerOfPacCard name="Access Exclusive Content" />
                <PowerOfPacCard name="$PAC Private Sale" />
                <PowerOfPacCard name="Exclusive NFT Drops" />
                <PowerOfPacCard name="Mentorship Services" />
                <PowerOfPacCard name="Discounts &amp; Other Incentives" />
            </div>
        </div>
    )
}

export default PowerOfPac