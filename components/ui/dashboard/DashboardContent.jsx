//DashboardContent.jsx
import { AttackOrigins } from "@/ui/dashboard/AttackOrigins";
import { PerformanceStats } from "./PerformanceStats";
import SubscriptionStatus from "./Subscriptions";
import { InterfaceStats } from "./InterfaceStats";



export const DashboardContent = () => {
    return (
        <div className=''>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
                {/* Column 1 */}
                <div>
                    {/* Attack Origins takes full width in the first column */}
                    <AttackOrigins />
                    {/* Subscription Status is placed below Attack Origins in the first column */}
                    <SubscriptionStatus />
                </div>

                {/* Column 2 */}
                <div>
                    {/* Performance Statistics takes full width in the second column */}
                    <PerformanceStats />
                    {/* Interfaces is placed below Performance Statistics in the second column */}
                    <InterfaceStats />
                </div>
            </div>
        </div>
    );
};
