import React from "react";
import { format } from "date-fns";

const App = () => {
  const now = new Date();
  const [location, setLocation] = React.useState<number | null>(null);

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);

      setLocation(position.coords.latitude);
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-400 flex justify-center items-center text-[#696969]">
      <div className="w-[450px] h-[500px] bg-white flex flex-col">
        <div className=" flex justify-between items-center mx-5 my-10 mr-20 font-semibold text-gray-700">
          <span> {location}</span>
          <span>{format(now, "dd-MM-yyyy")}</span>
        </div>
        <div className="flex justify-center gap-10">
          <div className="flex flex-col justify-center items-center">
            <span className="font-bold text-[132px]">20</span>
            <span className="font-semibold text-[32px]">Cloudy</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span>wind</span>
            <span>humidity</span>
          </div>
        </div>
        <div className="">date</div>
      </div>
      <div className="w-[350px] h-[500px] bg-slate-300">Right section</div>
    </div>
  );
};

export default App;
