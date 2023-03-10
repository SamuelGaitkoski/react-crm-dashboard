import '../styles/leadstatusitem.css';

type Props = {
    status: 'Won' | 'Cold' | 'Lost';
}

export const LeadStatusItem = ({ status }: Props) => {
    let divColor;
    let textColor;

    if(status == 'Won') {
        divColor = 'rgb(211, 246, 236)';
        textColor = '#0AC797';
    } else if(status == 'Cold') {
        divColor = 'rgb(255, 243, 209)';
        textColor = '#FFBC00';
    } else {
        divColor = 'rgb(254, 226, 231) ';
        textColor = '#FA5C7C';
    }

    return (
        <div style={{ backgroundColor: divColor }} className='main-lead-status-item'>
            <p style={{ color: textColor }}>{status} lead</p>
        </div>
    );
}