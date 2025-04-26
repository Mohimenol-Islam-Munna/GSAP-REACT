import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useLayoutEffect, useRef, useState } from "react";

const GSAPRender = () => {
  const boxContainer = useRef(null);
  const [rotation, setRotation] = useState(0);

  //   useGSAP(
  //     () => {
  //       console.log("gsp hook");
  //       gsap.to("#box", {
  //         x: "500",
  //         rotation: 45,
  //         duration: 10,
  //         delay: 3,
  //         border: "5px solid green",
  //         background: "white"
  //       });
  //     },
  //     { scope: boxContainer }
  //   );

  //   useGSAP(
  //     () => {
  //       console.log("gsp hook");
  //       gsap.from("#box", {
  //         x: "2500",
  //         rotation: 45,
  //         duration: 10,
  //         delay: 1,
  //         background: "salmon",
  //       });
  //     },
  //     { scope: boxContainer }
  //   );

  //   useGSAP(
  //     () => {
  //       console.log("gsp hook");
  //       gsap.fromTo(
  //         "#box",
  //         {
  //           xPercent: 0,
  //           rotation: 0,
  //           background: "salmon",
  //         },
  //         {
  //           xPercent: 100,
  //           rotation: 45,
  //           duration: 10,
  //           background: "palegreen",
  //           delay: 5,
  //         }
  //       );
  //     },
  //     { scope: boxContainer }
  //   );

  const parentRef = useRef();

  useLayoutEffect(() => {
    const box = boxContainer.current;
    const parent = parentRef.current;

    const parentWidth = parent.offsetWidth;
    const boxWidth = box.offsetWidth;

    const targetX = parentWidth - boxWidth;

    gsap.to(box, {
      x: targetX,
      duration: 2,
      ease: "power2.inOut",
      rotation: 75,
      background: "blueviolet"
    });
  }, []);

  const rotateBoxHandler = () => {
    console.log("rotateBoxHandler");
    setRotation((prev) => prev + 90);
  };

  //   useGSAP(
  //     () => {
  //       console.log("rotateBoxHandler useGSAP");

  //       gsap.to("#box", {
  //         rotation: rotation,
  //         onRepeat: () => {
  //           console.log("on repeat");
  //           setRotation(0);
  //         },
  //       });
  //     },
  //     [rotation],
  //     { scope: boxContainer }
  //   );

  return (
    <div className="bg-gray-700 p-4 h-[calc(100vh-76px)] border-t-4 border-amber-400">
      <h2 className="uppercase text-2xl">all gsap renderer</h2>

      <div ref={parentRef} className="border border-blue-400">
        <div
          ref={boxContainer}
          id="box"
          onClick={rotateBoxHandler}
          className="w-[50px] h-[50px] border border-red-500 mt-4 rounded-md cursor-pointer"
        ></div>
      </div>
    </div>
  );
};

export default GSAPRender;
