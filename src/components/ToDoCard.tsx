import '../styles/todocard.css';

import { useState } from 'react';
import { DotsThreeOutlineVertical } from "phosphor-react";

import { ToDoItem } from './ToDoItem';

import { Item } from '../types/Item';

export const ToDoCard = () => {
    const [list, setList] = useState<Item[]>([
        { id: 1, name: 'Build an angular app', done: true },
        { id: 2, name: 'Create new version 3.0', done: false },
        { id: 3, name: 'Hehe!! This looks cool!', done: false },
        { id: 4, name: 'Testing??', done: true },
        { id: 5, name: 'Creating component page', done: true }
    ]);

    const handleItemDone = (id: number, done: boolean) => {
        let newList = [...list];

        for(let i in newList) {
            if(newList[i].id === id) {
                newList[i].done = done;
            }
        }

        setList(newList);
    }

    return (
        <div className='main-to-do-card'>
            <div className='info-card-to-do-card'>
                <h3>TODO</h3>
                <DotsThreeOutlineVertical weight="fill" className='icon-info-card-to-do-card' />
            </div>
            <div className='items'>
                {list.map((item, index) => (
                    <ToDoItem 
                        key={index}
                        item={item} 
                        onUpdateCheck={handleItemDone}
                    />
                ))}
            </div>
        </div>
    );
}