import React from 'react';
import Styles from './HowDoWeDo.module.css';

function HowDoWeDo() {
    return (
        <div className={Styles.how_do_we_do} id='how-do-we-do-id' >
            <div className={Styles.main_heading}>
                <span className={Styles.uncolored_part}>
                    How Do
                    <span className={Styles.colored_part}>We Do It?</span>
                </span>
                <span className={Styles.description}>
                    The ground-breaking model of Pacman
                    Frog has been developed from a synthesis of academic research and financial market
                    experience. We have adopted standard methods that have been battle tested to serve our fleet
                    of services.
                </span>
            </div>
            <div className={Styles.page_body}>
                <div className={Styles.content}>
                    <div className={Styles.block}>
                        <span className={Styles.block_heading}>
                            Decentralized Decision Making
                        </span>
                        <span className={Styles.block_description}>
                            Pacman Frog shall adopt the Decentralized Autonomous Organization (DAO) model with full strength which means
                            that any event on the platform will not be under the control of a single institution
                            but distributed among our $PAC community
                        </span>
                    </div>
                    <div className={Styles.block}>
                        <span className={Styles.block_heading}>
                            Pacman Frog Academy
                        </span>
                        <span className={Styles.block_description}>
                            We will be developing a separate education arm within our ecosystem to make the users across
                            the globe develop awareness on beginners, intermediate, and advanced topics covered
                            within the scope of blockchain and crypto.
                        </span>
                    </div>
                    <div className={Styles.block}>
                        <span className={Styles.block_heading}>
                            Pacman Frog Academy
                        </span>
                        <span className={Styles.block_description}>
                            We will be developing a dedicated incubator and gaming branch to empower the innovators with access to
                            capital, community, and alliance formation to help drive the future of blockchain
                            gaming and NFTs.
                        </span>
                    </div>
                </div>
                <div className={Styles.img_div}><img className={Styles.img}
                    src="/img/HowWeDoIt-logo.png" /></div>
            </div>
        </div >
    )
}

export default HowDoWeDo