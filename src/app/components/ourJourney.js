"use client";
import React, { useState } from "react";

export default function Our_Journey() {
  const [activeDepot, setActiveDepot] = useState("District Sahiwal");

  const depots = [
    {
      name: "District Sahiwal",
      content: (
        <>
          Our Depot Having capacity of 12,500 M.T at District Sahiwal 80% Work
          completed. District Sahiwal.
          <br />
          We have planned to construct More Depots At Different IFEM Areas.
        </>
      ),
    },
    { name: "Dalutpur Sindh", content: "Coming soon..." },
    { name: "Sarai Naurang Banu-kpk", content: "Coming soon..." },
    { name: "Tarru Jabba Peshawar-kpk", content: "Coming soon..." },
    { name: "Shikarpu", content: "Coming soon..." },
  ];
  return (
    <>
      <div className="my-10 pt-10">
        <h1 className="uppercase text-center text-slate-900 text-2xl font-bold py-4">
          Our Journey
        </h1>
        <ul className="flex flex-wrap gap-4 text-center justify-center">
          {depots.map((depot) => (
            <li
              key={depot.name}
              className={`uppercase p-3 rounded-full cursor-pointer ${
                activeDepot === depot.name
                  ? "bg-[#ec2124] text-white"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
              onClick={() => setActiveDepot(depot.name)}
            >
              {depot.name}
            </li>
          ))}
        </ul>
        <p className="text-center py-4 mx-2">
          {depots.find((depot) => depot.name === activeDepot).content}
        </p>
      </div>
    </>
  );
}
