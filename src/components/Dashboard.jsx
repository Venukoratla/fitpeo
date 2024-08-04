import DashCard from "./DashCard";
import Table from "./Table";
import DashNavbar from "./DashNavbar";
import ChartSection from "./ChartSection";
import { cardList } from "../constants/data";

const Dashboard = ({ isOpen, setIsOpen }) => {
  return (
    <section className="flex justify-start flex-col h-screen w-full overflow-scroll py-4 px-8">
      <DashNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:flex-row flex-wrap">
        {cardList.map((card, index) => (
          <DashCard card={card} key={index} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10">
        <ChartSection />
      </div>
      <Table />
    </section>
  );
};

export default Dashboard;
