import React, {useState} from 'react'
import "../../assets/css/UserDashboard/Dashboard.css";
import Orders_Content from './Orders_Content';
import Membership_Content from './Membership_Content';
import Downloads_Content from './Downloads_Content';
import Addresses_Content from './Addresses_Content';
import AccountDetails_Content from './AccountDetails_Content';
import Payments_Content from './Payments_Content';
import MyPlans_Content from './MyPlans_Content';

function Dashboard() {
    const [activeTab, setActiveTab] = useState('Orders');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <div className='Dashboard-container'>
                <div className='Dashboard-second-container'>
                    <div className='Hello-user'>
                        <h1>HELLO USER</h1>
                    </div>
                    <div className='Dashboard-bar'>
                        <h2>DASHBOARD</h2>
                    </div>
                    <div className='Dashboard-content'>
                        <div className='Dashboard-list'>
                            <ul>
                                <li onClick={() => handleTabClick('Orders')} className={activeTab === 'Orders' ? 'Dashboard-list-active' : ''}>Orders</li>
                                <li onClick={() => handleTabClick('Membership')} className={activeTab === 'Membership' ? 'Dashboard-list-active' : ''}>Membership</li>
                                <li onClick={() => handleTabClick('Downloads')} className={activeTab === 'Downloads' ? 'Dashboard-list-active' : ''}>Downloads</li>
                                <li onClick={() => handleTabClick('Addresses')} className={activeTab === 'Addresses' ? 'Dashboard-list-active' : ''}>Addresses</li>
                                <li onClick={() => handleTabClick('Account details')} className={activeTab === 'Account details' ? 'Dashboard-list-active' : ''}>Account details</li>
                                <li onClick={() => handleTabClick('Payments')} className={activeTab === 'Payments' ? 'Dashboard-list-active' : ''}>Payments</li>
                                <li onClick={() => handleTabClick('My plans')} className={activeTab === 'My plans' ? 'Dashboard-list-active' : ''}>My plans</li>
                            </ul>
                        </div>
                        <div className='Dashboard-list-content'>
                            {activeTab === 'Orders' && <Orders_Content />}
                            {activeTab === 'Membership' && <Membership_Content />}
                            {activeTab === 'Downloads' && <Downloads_Content />}
                            {activeTab === 'Addresses' && <Addresses_Content />}
                            {activeTab === 'Account details' && <AccountDetails_Content />}
                            {activeTab === 'Payments' && <Payments_Content />}
                            {activeTab === 'My plans' && <MyPlans_Content />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard