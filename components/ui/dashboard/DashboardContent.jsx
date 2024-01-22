import { AttackOrigins } from "@/ui/dashboard/AttackOrigins";
import { PerformanceStats } from "./PerformanceStats";

//DashboardContent.jsx

export const DashboardContent = () => {
    return (
        <div className='dashboard-content '>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-[1.9375rem]">

                <AttackOrigins />

                <PerformanceStats />
                
                
            </div>

        </div>
    );
};
