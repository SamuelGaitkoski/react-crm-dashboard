import '../styles/leaditem.css';

import { LeadStatusItem } from "./LeadStatusItem";

type Props = {
    image: string;
    name: string;
    email: string;
    leadership: 'Won' | 'Cold' | 'Lost';
}

export const LeadItem = ({ image, name, email, leadership }: Props) => {
    return (
        <div className='main-leaditem'>
            <div className='leftpart-lead-item'>
                <img src={image} alt="" />
                <div className='leftpart-text-lead-item'>
                    <h5>{name}</h5>
                    <p>{email}</p>
                </div>
            </div>
            <div className='lead-status-item'>
                <LeadStatusItem status={leadership} /> 
            </div>
        </div>
    )
}