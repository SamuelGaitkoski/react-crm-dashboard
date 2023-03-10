import '../styles/topbar.css';

import { Bell, CaretDown, Gear, List, MagnifyingGlass, SquaresFour } from 'phosphor-react';

import usFlag from '../assets/us.jpg';
import avatar1 from '../assets/avatar-1.jpg';

export const TopBar = () => {
    return (
        <div className='main-topbar'>
            <div className="leftside-content">
                <List weight='regular' /> 
                <div className='input-topbar'>
                    <MagnifyingGlass weight='bold' />
                    <input type="text" placeholder='Search...' />
                    <button className='button-topbar'>Search</button>
                </div>
            </div>
            <div className="rightside-content">
                <div className="languages">
                    <img src={usFlag} alt="" />
                    <p>English</p>
                    <CaretDown />
                </div>
                <div className="icons">
                    <Bell />
                    <SquaresFour />
                    <Gear />
                </div>
                <div className="user">
                    <img src={avatar1} alt="" />
                    <div className="user-infos">
                        <h3>Dominic Keller</h3>
                        <p>Founder</p>
                    </div>
                </div>
            </div>
        </div>
    );
}