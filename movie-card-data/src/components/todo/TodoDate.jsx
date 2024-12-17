import React,{useEffect,useState} from "react";

const TodoDate = () => {
    const [date, setDate] = useState("");
      const [time, setTime] = useState("");
    
      useEffect(() => {
        const interval = setInterval(() => {
          const now = new Date();
          const time = String(now.toLocaleTimeString()).padStart(2, "0");
          const day = String(now.getDate()).padStart(2, "0");
          const month = now.getMonth() + 1;
          const year = now.getFullYear();
          const date = `${day}-${month}-${year}`;
          setDate(date);
          setTime(time);
        }, 1000);
        return () => clearInterval(interval);
      }, []);
  return (
    <>
      <section className="flex justify-center mt-8 gap-10">
        <p className="text-2xl">Date :- {date}</p>
        <p className="text-2xl">Time :- {time}</p>
      </section>
    </>
  );
};

export default TodoDate;
