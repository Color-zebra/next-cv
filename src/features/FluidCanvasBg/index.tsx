"use client";

import {
  HTMLAttributes,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
} from "react";

import s from "./FluidCanvasBg.module.scss";
import webGLFluidEnhanced from "webgl-fluid-enhanced";
import { passMouseEvent } from "@/shared/utils/passMouseEvent";
import clsx from "clsx";

// const FLUID_CONFIG = {
//   PRESSURE: 0.1,
//   SUNRAYS: true,
//   DENSITY_DISSIPATION: 10,
//   CURL: 30,
//   COLOR_PALETTE: ["#0000ff"],
//   INITIAL: false,
//   SIM_RESOLUTION: 128,
// };

const TEST_CONFIG = {
  SIM_RESOLUTION: 128,
  DYE_RESOLUTION: 1024,
  CAPTURE_RESOLUTION: 512,
  DENSITY_DISSIPATION: 10,
  VELOCITY_DISSIPATION: 0.3,
  PRESSURE: 0.8,
  PRESSURE_ITERATIONS: 10,
  CURL: 30,
  INITIAL: false,
  SPLAT_AMOUNT: 5,
  SPLAT_RADIUS: 0.06,
  SPLAT_FORCE: 4000,
  SPLAT_KEY: "Space",
  SHADING: true,
  COLORFUL: true,
  COLOR_UPDATE_SPEED: 10,
  COLOR_PALETTE: ["#30c4ff"],
  HOVER: true,
  BACK_COLOR: "#000000",
  TRANSPARENT: false,
  BRIGHTNESS: 0.5,
  BLOOM: true,
  BLOOM_ITERATIONS: 8,
  BLOOM_RESOLUTION: 256,
  BLOOM_INTENSITY: 0.8,
  BLOOM_THRESHOLD: 0.6,
  BLOOM_SOFT_KNEE: 0.7,
  SUNRAYS: true,
  SUNRAYS_RESOLUTION: 196,
  SUNRAYS_WEIGHT: 0.5,
};

interface FluidCanvasBgProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const FluidCanvasBg = ({
  children,
  className,
  ...props
}: FluidCanvasBgProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  const passMouseEventToCanvas = useCallback(
    (e: MouseEvent) => passMouseEvent(e, canvasRef),
    [],
  );

  useEffect(() => {
    const divElem = divRef.current;
    if (divElem) {
      divElem.addEventListener("click", passMouseEventToCanvas);
      divElem.addEventListener("mousemove", passMouseEventToCanvas);
      divElem.addEventListener("mousedown", passMouseEventToCanvas);
      divElem.addEventListener("mouseup", passMouseEventToCanvas);
      divElem.addEventListener("mouseover", passMouseEventToCanvas);
      divElem.addEventListener("mouseout", passMouseEventToCanvas);
    }

    return () => {
      if (divElem) {
        divElem.removeEventListener("click", passMouseEventToCanvas);
        divElem.removeEventListener("mousemove", passMouseEventToCanvas);
        divElem.removeEventListener("mousedown", passMouseEventToCanvas);
        divElem.removeEventListener("mouseup", passMouseEventToCanvas);
        divElem.removeEventListener("mouseover", passMouseEventToCanvas);
        divElem.removeEventListener("mouseout", passMouseEventToCanvas);
      }
    };
  }, [passMouseEventToCanvas]);
  useEffect(() => {
    if (canvasRef.current) {
      webGLFluidEnhanced.simulation(canvasRef.current, TEST_CONFIG);
    }
  }, [canvasRef]);

  return (
    <>
      <canvas ref={canvasRef} className={s.canvas} />
      <div ref={divRef} className={clsx(s.child, className)} {...props}>
        {children}
      </div>
    </>
  );
};
