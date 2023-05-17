import React, { useEffect, useState } from "react";
import ProgressBar from "../ProgressBar";

export default function CountdownTimer({ startAt, endAt }) {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endAt));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(endAt));
        }, 1000);

        return () => clearInterval(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [startAt, endAt]);

    function calculateTimeLeft(endAt) {
        const difference = new Date(endAt) - new Date();
        if (difference < 0) {
            return false;
        }

        let totalTimeInt = new Date(endAt) - new Date(startAt)
        let percentInt = parseInt(difference / totalTimeInt * 100)
        percentInt = (percentInt > 100) ? 100 : percentInt

        const totalSeconds = Math.floor(difference / 1000);
        const days = Math.floor(totalSeconds / (60 * 60 * 24));
        const hours = Math.floor((totalSeconds / (60 * 60)) % 24);
        const minutes = Math.floor((totalSeconds / 60) % 60);
        const seconds = Math.floor(totalSeconds % 60);

        return {
            days: days.toString(),
            hours: hours < 10 ? "0" + hours : hours.toString(),
            minutes: minutes < 10 ? "0" + minutes : minutes.toString(),
            seconds: seconds < 10 ? "0" + seconds : seconds.toString(),
            percent : percentInt
        };
    }

    return (
        <>
            <ProgressBar percent={timeLeft.percent} />
            <div>
                {timeLeft !== false ? (
                    <span>
            {timeLeft.days !== "0" && timeLeft.days + " days, "}{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
          </span>
                ) : (
                    <span>
            Time up!
          </span>
                )}
            </div>
        </>
    );
}
