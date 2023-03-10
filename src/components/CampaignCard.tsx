import '../styles/campaigncard.css';

import { Circle, DotsThreeOutlineVertical, EnvelopeSimple, EnvelopeSimpleOpen, Flag, PaperPlaneRight } from "phosphor-react"

import { CircleIcon } from './CircleIcon';

import graphCampaign from '../assets/graph-campaign.png';

export const CampaignCard = () => {
    return (
        <div className='main-campaigncard'>
            <div className='info-card-campaigncard'>
                <h3>CAMPAIGNS</h3>
                <DotsThreeOutlineVertical weight="fill" className='icon-info-card' />
            </div>
            <img src={graphCampaign} alt="" />
            <div className='parameters'>
                <div className='parameter-card'>
                    <div>
                        <PaperPlaneRight weight="fill" />
                    </div>
                    <p className='parameter-card-number'>6,510</p>
                    <div className='status-parameter-card'>
                        <CircleIcon color='rgb(255, 188, 0)' />
                        <p>Total Sent</p>
                    </div>
                </div>
                <div className='parameter-card'>
                    <div>
                        <Flag weight="fill" />
                    </div>
                    <p className='parameter-card-number'>3,487</p>
                    <div className='status-parameter-card'>
                        <CircleIcon color='rgb(114, 124, 245)' />
                        <p>Reached</p>
                    </div>
                </div>
                <div className='parameter-card'>
                    <div>
                        <EnvelopeSimpleOpen weight="fill" />
                    </div>
                    <p className='parameter-card-number'>1,568</p>
                    <div className='status-parameter-card'>
                        <CircleIcon color='rgb(10, 207, 151)' />
                        <p>Opened</p>
                    </div>
                </div>
            </div>
        </div>
    );
}