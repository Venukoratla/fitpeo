import { useId } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const DashCard = ({ card }) => {
  const { color, label, rate, amount, icon } = card;
  const uid = useId();

  return (
    <div
      className="flex justify-evenly items-center px-2 py-4 rounded-md bg-[#1F2027] w-full"
      key={uid}
    >
      <div
        className={`grid place-items-center rounded-full h-[90px] w-[90px] text-5xl ${color}`}
      >
        {icon}
      </div>
      <div className="pl-2">
        <p className="text-white text-xs text-left">{label}</p>
        <p className="text-white text-2xl text-left font-semibold">
          ${amount}K
        </p>
        <p className="flex justify-start items-center text-sm text-left">
          {rate > 10 ? (
            <>
              <span className="font-bold text-green-700">
                <AiOutlineArrowUp />
              </span>
              <span className="font-bold text-green-700">{rate}%</span>
            </>
          ) : (
            <>
              <span className="font-bold text-red-700">
                <AiOutlineArrowDown />
              </span>
              <span className="font-bold text-red-700">{rate}%</span>
            </>
          )}
          <span className="text-white ml-1">this month</span>
        </p>
      </div>
    </div>
  );
};

export default DashCard;
