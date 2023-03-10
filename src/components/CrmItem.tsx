import '../styles/crmitem.css';

import { ArrowFatDown, ArrowFatUp } from 'phosphor-react';

type Props = {
    title: string;
    number: string;
    percentage: string;
    above: boolean;
    image: string;
}

export const CrmItem = ({ title, number, percentage, above, image }: Props) => {
    return (
        <div className='main-crmitem'>
            <div className='leftpart-crmitem'>
                <h5>{title}</h5>
                <p className='number-crmitem'>{number}</p>
                <div className='percentage-crmitem'>
                    { above 
                        ? <ArrowFatUp weight='fill' style={{ color: '#0AC797' }} /> 
                        : <ArrowFatDown weight='fill' style={{ color: '#fA57C7' }} /> 
                    }
                    <p style={{ color: above ? '#0AC797' : '#fA57C7' }}>{percentage}</p>
                </div>
            </div>
            <img src={image} alt="" />
        </div>
    );
}