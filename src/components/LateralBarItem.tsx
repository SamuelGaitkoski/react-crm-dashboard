import { CaretRight } from 'phosphor-react';
import '../styles/lateralbaritem.css';

type Props = {
    icon: React.ReactNode;
    text: string;
    hasSubsections: boolean;
}

export const LateralBarItem = ({ icon, text, hasSubsections }: Props) => {
    return (
        <div className="main-lateralbaritem">
            <div className='leftPart'>
                {icon}
                <h3 className="text-lateralbaritem">{text}</h3>
            </div>
            <div className='rightPart'>
                {hasSubsections && 
                    <CaretRight />
                }
            </div>
        </div>
    );
}