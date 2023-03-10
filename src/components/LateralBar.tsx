import '../styles/lateralbar.css';

import { HouseLine, CalendarBlank, Chats, Storefront, Envelope, Bag, File, Globe, Browser, WifiHigh, FolderPlus, Notebook, Cube, FolderSimplePlus, MapPin, GridFour, ChartBar, Table, Stack, BookBookmark, Cardholder } from 'phosphor-react';

import { LateralBarItem } from './LateralBarItem';
import { UpgradeCard } from './UpgradeCard';

import logo from '../assets/logo.png';


export const LateralBar = () => {
    return (
        <div className="main-lateralbar">
            <div className='logo'>  
                <img src={logo} alt="" />
            </div>
            <div className='navigation section-lateralbar'>
                <h3 className="title-lateral-bar">NAVIGATION</h3>
                <LateralBarItem icon={<HouseLine weight='regular' />} text='Dashboards' hasSubsections={false} />
            </div>
            <div className='apps section-lateralbar'>
                <h3 className="title-lateral-bar">APPS</h3>
                <LateralBarItem icon={<CalendarBlank weight='regular' />} text='Calendar' hasSubsections={false} />
                <LateralBarItem icon={<Chats weight='regular' />} text='Chat' hasSubsections={false} />
                <LateralBarItem icon={<Storefront weight='regular' />} text='Ecommerce' hasSubsections={true} />
                <LateralBarItem icon={<Envelope weight='regular' />} text='Email' hasSubsections={true} />
                <LateralBarItem icon={<Bag weight='regular' />} text='Projects' hasSubsections={true} />
                <LateralBarItem icon={<WifiHigh weight='regular' />} text='Social Feed' hasSubsections={false} />
                <LateralBarItem icon={<Notebook weight='regular' />} text='Tasks' hasSubsections={true} />
                <LateralBarItem icon={<FolderPlus weight='regular' />} text='File Manager' hasSubsections={false} />
            </div>
            <div className='custom section-lateralbar'>
                <h3 className="title-lateral-bar">CUSTOM</h3>
                <LateralBarItem icon={<File weight='regular' />} text='Pages' hasSubsections={true} />
                <LateralBarItem icon={<Globe weight='regular' />} text='Landing' hasSubsections={false} />
                <LateralBarItem icon={<Browser weight='regular' />} text='Layouts' hasSubsections={true} />
            </div>
            <div className='components section-lateralbar'>
                <h3 className="title-lateral-bar">COMPONENTS</h3>
                <LateralBarItem icon={<Cube weight='regular' />} text='Base UI' hasSubsections={true} />
                <LateralBarItem icon={<BookBookmark weight='regular' />} text='Extended UI' hasSubsections={true} />
                <LateralBarItem icon={<Stack weight='regular' />} text='Widgets' hasSubsections={false} />
                <LateralBarItem icon={<Cardholder weight='regular' />} text='Icons' hasSubsections={true} />
                <LateralBarItem icon={<Table weight='regular' />} text='Forms' hasSubsections={true} />
                <LateralBarItem icon={<ChartBar weight='regular' />} text='Charts' hasSubsections={true} />
                <LateralBarItem icon={<GridFour weight='regular' />} text='Tables' hasSubsections={true} />
                <LateralBarItem icon={<MapPin weight='regular' />} text='Maps' hasSubsections={true} />
                <LateralBarItem icon={<FolderSimplePlus weight='regular' />} text='Multi Level' hasSubsections={true} />
            </div>
            <div className='unlimited-access'>
                <h3 className="title-lateral-bar"></h3>
            </div>
            <div className="upgrade-card">
                <UpgradeCard />
            </div>
        </div>
    );
}