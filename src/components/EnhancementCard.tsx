import '../styles/enhancementcard.css';

import { ArrowRight, SpeakerLow } from "phosphor-react";

import emailCampaign from '../assets/email-campaign.svg';

export const EnhancementCard = () => {
    return (
        <div className='main-enhancement-card'>
            <div className='leftpart-enhancement-card'>
                <SpeakerLow weight="fill" className='speaker-icon' />
                <p>Enhance your <strong>Campaign</strong> for better outreach</p>
                <ArrowRight weight="bold" className='arrow-right-icon' />
            </div>
            <div className='rightpart-enhancement-card'>
                <img src={emailCampaign} alt="" />
            </div>
        </div>
    )
}