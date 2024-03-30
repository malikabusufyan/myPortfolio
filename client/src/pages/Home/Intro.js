import React from "react";

function Intro() {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
      <h1 className="text-white">Hi, I am</h1>
      <h1 className="text-7xl text-secondary font-semibold">
        Abu Sufyan Malik
      </h1>
      <h1 className="text-4xl text-white font-semibold">
        Building Web Apps🌐 !MERN Stack & Python!
      </h1>
      <p className="text-white w-2/3">
        I am a Full Stack Developer, I have worked as a Backend Developer and
        ML-Data Associate in TCS and Amazon India. I am pursuing my Masters in
        Information System from Union Commonwealth University USA. Skilled in
        MERN Stack, Python, Javascript, DBMS (SQL, MySql and MongoDB).
      </p>
      <button className="border-2 border-tertiary rounded text-tertiary px-10 py-3">
        Get Started
      </button>
    </div>
  );
}

export default Intro;
