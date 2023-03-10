import '../styles/recentleadscard.css';

import { DotsThreeOutlineVertical } from 'phosphor-react';

import { LeadItem } from './LeadItem';

import avatar1 from '../assets/avatar-1.jpg';
import avatar2 from '../assets/avatar-2.jpg';
import avatar3 from '../assets/avatar-3.jpg';
import avatar4 from '../assets/avatar-4.jpg';
import avatar5 from '../assets/avatar-5.jpg';
import avatar6 from '../assets/avatar-6.jpg';

export const RecentLeadsCard = () => {
    return (
        <div className='main-recent-leads-card'>
            <div className='info-card-recent-leads-card'>
                <h3>RECENT LEADS</h3>
                <DotsThreeOutlineVertical weight="fill" className='icon-info-card-recent-leads-card' />
            </div>
            <div className='leads'>
                <LeadItem image={avatar2} name='Risa Pearson' email='richard.john@mail.com' leadership='Cold' />
                <LeadItem image={avatar3} name='Margaret D. Evans' email='margaret.evans@rhyta.com' leadership='Lost' />
                <LeadItem image={avatar4} name='Bryan J. Luellen' email='bryuellen@dayrep.com' leadership='Won' />
                <LeadItem image={avatar5} name='Kathryn S. Collier' email='collier@jourrapide.com' leadership='Cold' />
                <LeadItem image={avatar1} name='Timothy Kauper' email='thykauper@rhyta.com' leadership='Cold' />
                <LeadItem image={avatar6} name='Zara Raws' email='austin@dayrep.com' leadership='Won' />
            </div>
        </div>
    );
}