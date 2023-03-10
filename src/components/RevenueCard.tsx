import '../styles/revenuecard.css';

import { DotsThreeOutlineVertical } from 'phosphor-react';

import { CircleIcon } from './CircleIcon';

import graphRevenue from '../assets/graph-revenue.png';

export const RevenueCard = () => {
    return (
        <div className='main-revenuecard'>
            <div className='info-card-revenuecard'>
                <h3>REVENUE</h3>
                <DotsThreeOutlineVertical weight="fill" className='icon-info-card-revenue-card' />
            </div>
            <div className='infos-card-revenuecard'>
                <div className='info-card-revenuecard-infos-card'>
                    <h4>Current Month</h4>
                    <p>$42,025</p>
                </div>
                <div className='info-card-revenuecard-infos-card'>
                    <h4>Previous Month</h4>
                    <p>$74,651</p>
                </div>
            </div>
            <img src={graphRevenue} alt="" />
            <div className='graph-indicative'>
                <div className='each-graph-indicative'>
                    <CircleIcon color='#0ACF97' />
                    <p>Total Revenue</p>
                </div>
                <div className='each-graph-indicative'>
                    <CircleIcon color='#FA5C7C' />
                    <p>Total Pipeline</p>
                </div>
            </div>
        </div>
    )
}