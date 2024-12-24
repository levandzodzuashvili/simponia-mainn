"use client";

import BannerMain from "@/public/banner/BannerMain2";

const FloorSelector = () => {
  // Example data for floors
  // const floors = [
  //   {
  //     id: 1,
  //     name: "სართული 1",
  //     top: "103vh",
  //     right: "10%",
  //     width: "45%",
  //     height: "4%",
  //   },
  //   {
  //     id: 2,
  //     name: "სართული 2",
  //     top: "94vh",
  //     right: "10%",
  //     width: "45%",
  //     height: "4%",
  //   },
  //   {
  //     id: 3,
  //     name: "სართული 3",
  //     top: "84vh",
  //     right: "10%",
  //     width: "45%",
  //     height: "4%",
  //   },
  //   {
  //     id: 4,
  //     name: "სართული 4",
  //     top: "74vh",
  //     right: "10%",
  //     width: "45%",
  //     height: "4%",
  //   },
  //   {
  //     id: 5,
  //     name: "სართული 5",
  //     top: "64vh",
  //     right: "10%",
  //     width: "45%",
  //     height: "4%",
  //   },
  //   {
  //     id: 6,
  //     name: "სართული 6",
  //     top: "54vh",
  //     right: "10%",
  //     width: "45%",
  //     height: "4%",
  //   },
  //   {
  //     id: 7,
  //     name: "სართული 7",
  //     top: "54vh",
  //     right: "10%",
  //     width: "45%",
  //     height: "4%",
  //   },
  //   {
  //     id: 7,
  //     name: "სართული 8",
  //     top: "54vh",
  //     right: "10%",
  //     width: "45%",
  //     height: "4%",
  //   },
  // ];

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* Background Images */}
      <div className="w-full h-full">
        <BannerMain />
      </div>
    </div>
  );
};

export default FloorSelector;
