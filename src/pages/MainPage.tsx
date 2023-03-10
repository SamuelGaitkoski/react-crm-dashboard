import '../styles/mainpage.css';

import { TopBar } from '../components/TopBar';
import { LateralBar } from '../components/LateralBar';
import { Footer } from '../components/Footer';
import { CrmBar } from '../components/CrmBar';
import { CampaignCard } from '../components/CampaignCard';
import { RevenueCard } from '../components/RevenueCard';
import { TopPerformingCard } from '../components/TopPerformingCard';
import { RecentLeadsCard } from '../components/RecentLeadsCard';
import { EnhancementCard } from '../components/EnhancementCard';
import { ToDoCard } from '../components/ToDoCard';

export const MainPage = () => {
    return (
        <div className='main-mainpage'>
            <LateralBar />
            <div className="rest-content">
                <TopBar />
                <div className="main-content">
                    <CrmBar />
                    <div className="main-content-campaign-revenue">
                        <CampaignCard />
                        <RevenueCard />
                    </div>
                    <div className='rest-main-content'>
                        <div className='performing-leads-cards'>
                            <TopPerformingCard />
                            <RecentLeadsCard />
                        </div>
                        <div className='enhancement-to-do-cards'>
                            <EnhancementCard />
                            <ToDoCard />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}