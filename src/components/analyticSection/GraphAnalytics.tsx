import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { chartData } from "../../utils/chart-data";

ChartJS.register(
  ArcElement,
  Legend,
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title
);

const GraphAnalytics = () => {
  return (
    <div className="w-full bg-[#202028] rounded-lg lg:w-[70%]">
      <div className="relative w-full h-80 overflow-hidden">
        <Bar
          data={chartData}
          options={{ maintainAspectRatio: false, aspectRatio: 1 }}
          className="absolute inset-0 object-cover" // Apply object-cover or other object-fit values here
        />
      </div>
    </div>
  );
};

export default GraphAnalytics;
