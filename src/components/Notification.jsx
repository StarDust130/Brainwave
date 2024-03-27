import { useEffect, useState } from "react";
import { notification1 } from "../assets";
import { notificationImages } from "../constants";

const Notification = ({ className, title }) => {
  //! State to store elapsed time in minutes and seconds
  const [elapsedTime, setElapsedTime] = useState({ minutes: 0, seconds: 0 });

  
  useEffect(() => {
    //! Interval function to update elapsed time
    const interval = setInterval(() => {
     
      setElapsedTime((prevElapsedTime) => {
        const newSeconds = prevElapsedTime.seconds + 1;
        //! Check if seconds cross 60
        if (newSeconds === 60) {
          //! If seconds reach 60, reset seconds to 0 and increment minutes
          return { minutes: prevElapsedTime.minutes + 1, seconds: 0 };
        } else {
          //! If seconds don't reach 60, update only seconds
          return { ...prevElapsedTime, seconds: newSeconds };
        }
      });
    }, 1000); // Update every second

    //! Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Run effect only once when the component mounts

  // Format elapsed time for display
  const { minutes, seconds } = elapsedTime;
  const timeElapsed =
    minutes > 0
      ? `${minutes} ${minutes === 1 ? "min" : "mins"} ${seconds} ${
          seconds === 1 ? "sec" : "secs"
        }`
      : `${seconds} ${seconds === 1 ? "sec" : "secs"} ago`;
  return (
    <div
      className={`
    ${
      className || ""
    } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <img
        src={notification1}
        alt="notification1"
        width={62}
        height={62}
        className="rounded-xl"
      />

      <div className="flex-1 ">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>
        <div className="flex items-center justify-between ">
          <ul className="flex -m-0.5  ">
            {notificationImages.map((image, index) => (
              <li
                key={index}
                className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden "
              >
                <img
                  src={image}
                  width={20}
                  height={20}
                  className="pointer-events-none w-full "
                  alt="icon"
                />
              </li>
            ))}
          </ul>
          <div className="text-xs text-n-13">{timeElapsed}</div>
        </div>
      </div>
    </div>
  );
};
export default Notification;
