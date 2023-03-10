import '../styles/crmbar.css';

import { CaretRight } from "phosphor-react";

import { CrmItem } from '../components/CrmItem';

import graph1 from '../assets/graph-1.png';
import graph2 from '../assets/graph-2.png';
import graph3 from '../assets/graph-3.png';
import graph4 from '../assets/graph-4.png';

export const CrmBar = () => {
    return (
        <div className='main-crmbar'>
            <div className='infos-crmbar'>
                <h3>CRM</h3>
                <div className='links-infoscrmbar'>
                    <a href="#" className='links-infocrmbar-noactive'>Hyper</a>
                    <CaretRight weight="regular" /> 
                    <a href="#" className='links-infocrmbar-noactive'>Dashboard</a>
                    <CaretRight weight="regular" /> 
                    <a href="#" className='links-infocrmbar-active'>CRM</a>
                </div>
            </div>
            <div className='crm-items'>
                <CrmItem title='Campaign ...' number='9,184' percentage='3.27%' above={true} image={graph1} />
                <CrmItem title='New Leads' number='3,254' percentage='5.38%' above={false} image={graph2} />
                <CrmItem title='Deals' number='861' percentage='4.87%' above={true} image={graph3} />
                <CrmItem title='Booked Re...' number='$253k' percentage='11.7%' above={true} image={graph4} />
            </div>
        </div>
    );
}