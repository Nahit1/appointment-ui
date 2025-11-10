import React from "react";
import BigCalendar from "../components/BigCalendar";

const Calendar = () => {
  return (
    <div className="px-4 flex gap-4 flex-col xl:flex-row">
      <div className="w-full bg-white p-4 rounded-md">
        <h1 className="text-xl font-semibold">Schedule</h1>

        <BigCalendar />
      </div>
    </div>
  );
};

export default Calendar;
