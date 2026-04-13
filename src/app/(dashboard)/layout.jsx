import React from 'react'
import DashboardHeader from '@/src/components/organisms/DashboardHeader';
import DashboardSidebar from '@/src/components/organisms/DashboardSidebar';
import "@/uploads/styles/dashboard/dashboard.css"
import "@/uploads/styles/component/component.css"

const DashboardLayout = ({ children }) => {
    return (
        <>
            <div className="dashboard-layout">
                <DashboardSidebar />
                <div className="dashboard-main">
                    <DashboardHeader />
                    <div className="dashboard-content">
                        <div className="container">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardLayout

