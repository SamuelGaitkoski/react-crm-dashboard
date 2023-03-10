import '../styles/circle.css';

type Props = {
    color: string;
}

export const CircleIcon = ({ color }: Props) => {
    return (
        <div className='circle-icon' style={{ backgroundColor: color }}></div>
    )
}