import '../styles/todoitem.css';

import { Item } from "../types/Item";

type Props = {
    item: Item;
    onUpdateCheck: (id: number, done: boolean) => void;
}

export const ToDoItem = ({ item, onUpdateCheck }: Props) => {
    return (
        <div className='main-to-do-item'>
            <input 
                type="checkbox" 
                checked={item.done} 
                onChange={event => onUpdateCheck(item.id, event.target.checked)}
            />
            <label style={{ textDecoration: item.done ? 'line-through' : 'initial' }}>{item.name}</label>
        </div>
    );
}