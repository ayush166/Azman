import { dummyStats } from "@/lib/stats";

// ProgressBar.jsx
const ProgressBar = ({ percentage }) => {
  return (
    <div className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-700">
      <div
        className="bg-blue-500 h-2.5 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

// Statistic.jsx
const Statistic = ({ label, value, isProgressBar }) => {
  return (
    <div className="flex justify-between items-center py-1">
      <span className="text-[0.875rem] font-medium">{label}:</span>
      {isProgressBar ? (
        <ProgressBar percentage={value} />
      ) : (
        <span className="text-sm">{value}</span>
      )}
    </div>
  );
};

// AdditionalStats.jsx
const AdditionalStats = ({ stats }) => {
  return (
    <div className="">
      <div className="flex">
        <label htmlFor="">Services</label>
        <div>5</div>
      </div>
      <div className="flex">
        <label htmlFor="">Servers</label>
        <div>5</div>
      </div>
    </div>
  );
};

// PerformanceStats.jsx
export const PerformanceStats = ({ stats, additionalStats }) => {
  return (
    <div className="bg-white shadow rounded-lg ">
      <p className="text-md font-bold h-[1.9375rem] bg-primary-blue text-custom-white pl-2 align-middle">Performance Statistics</p>
      <div className="p-4">
      {dummyStats.map((stat, index) => (
        <Statistic key={index} label={stat.label} value={stat.value} isProgressBar={stat.isProgressBar} />
      ))}
      </div>
      <AdditionalStats stats={additionalStats} />
    </div>
  );
};
