import '../styles/upgradecard.css';

import { X } from 'phosphor-react';

import helpIcon from '../assets/help-icon.svg';

export const UpgradeCard = () => {
    return (
        <div className='main-upgradecard'>
            <div className="icon">
                <X weight='regular' />
            </div>
            <div className='rest-content-upgradecard'>
                <img src={helpIcon} alt="" />
                <h4>Unlimited Access</h4>
                <p>Upgrade to plan to get access to unlimited reports</p>
                <button>Upgrade</button>
            </div>
        </div>
    );
}