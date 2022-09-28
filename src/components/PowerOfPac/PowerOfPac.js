import React from 'react';
import './PowerOfPac.css';
import PowerOfPacCard from '../PowerOfPacCard/PowerOfPacCard';
function PowerOfPac() {
    return (
        <div className='power-of-pac'>
            <div className='power-of-pac-heading'>
                <span className='power-of-pac-uncolored-heading'>
                    Power of
                    <span className='power-of-pac-colored-heading'>
                        $PAC
                    </span>
                </span>
                <span className='power-of-pac-description'>
                    $PAC
                    is the governance token for the Pacman Frog DAO allowing holders to vote on the future
                    development of the project. Since our project is community-driven, $PAC aims to evolve as a
                    premier community token with diverse use cases across the NFTs, GameFi, DeFi, and much
                    more.
                </span>
            </div>
            <div className='power-of-pac-content'>
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