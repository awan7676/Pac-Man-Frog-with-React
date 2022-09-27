import React from 'react';
import './HowDoWeDo.css';

function HowDoWeDo() {
    return (
        <div className='how-do-we-do'>
            <div className='main-heading'>
                <span className='uncolored-heading'>
                    How Do
                    <span className='colored-heading'>We Do It?</span>
                </span>
                <span className='description'>
                    The ground-breaking model of Pacman
                    Frog has been developed from a synthesis of academic research and financial market
                    experience. We have adopted standard methods that have been battle tested to serve our fleet
                    of services.
                </span>
            </div>
            <div className='page-body'>
                <div className='content'>
                    <div className='block'>
                        <span className='block-heading'>
                            Decentralized Decision Making
                        </span>
                        <span className='block-description classNam'>
                            Pacman Frog shall adopt the Decentralized Autonomous Organization (DAO) model with full strength which means
                            that any event on the platform will not be under the control of a single institution
                            but distributed among our $PAC community
                        </span>
                    </div>
                    <div className='block'>
                        <span className='block-heading'>
                            Pacman Frog Academy
                        </span>
                        <span className='block-description'>
                            We will be developing a separate education arm within our ecosystem to make the users across
                            the globe develop awareness on beginners, intermediate, and advanced topics covered
                            within the scope of blockchain and crypto.
                        </span>
                    </div>
                    <div className='block'>
                        <span className='block-heading'>
                            Pacman Frog Academy
                        </span>
                        <span className='block-description'>
                            We will be developing a dedicated incubator and gaming branch to empower the innovators with access to
                            capital, community, and alliance formation to help drive the future of blockchain
                            gaming and NFTs.
                        </span>
                    </div>
                </div>
                <div className='img-div'><img className='img'
                    src="/img/HowWeDoIt-logo.png" /></div>
            </div>
        </div>
    )
}

export default HowDoWeDo