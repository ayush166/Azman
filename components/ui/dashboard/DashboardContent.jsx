//DashboardContent.jsx
import { AttackOrigins } from "@/ui/dashboard/AttackOrigins";
import { PerformanceStats } from "./PerformanceStats";
import SubscriptionStatus from "./Subscriptions";
import { InterfaceStats } from "./InterfaceStats";
import { Attacks } from "./Attacks";
import {BotStatistics} from "./BotStatistics";



export const DashboardContent = () => {
    return (
        <div className=''>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
                {/* Column 1 */}
                <div>
                    <AttackOrigins />
                    <SubscriptionStatus />
                </div>

                {/* Column 2 */}
                <div>

                    <PerformanceStats />

                    <InterfaceStats />
                </div>
                {/* comlum 1 */}
                <div>

                    <Attacks />

                </div>

                {/* column 2 */}
                <div>
                  <BotStatistics/>
                </div>
            </div>
        </div>
    );
};



const Sa = () => {
    return (
        <div className="mx-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nobis cum odio eligendi odit molestias mollitia doloremque, atque eius repudiandae, deleniti facilis quae. Veniam impedit veritatis quibusdam, explicabo mollitia corporis adipisci quasi repellat. Commodi magni maiores iusto. Quisquam magni libero minima porro, soluta dignissimos eos harum? Nihil rem quos accusamus. Molestiae repudiandae ducimus, quos eveniet dicta hic dolor qui reiciendis minus? Harum consectetur tenetur nulla exercitationem sit, illum repellat beatae. Quod, a. Deleniti nostrum alias labore blanditiis maxime, voluptatum voluptates harum quod eaque ipsum vitae distinctio sit eligendi ex repellendus laudantium consectetur pariatur asperiores soluta sapiente tenetur recusandae minima! Libero.
        </div>
    )
}

