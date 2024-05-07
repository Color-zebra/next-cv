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

const FLUID_CONFIG = {
  PRESSURE: 0.1,
  SUNRAYS: true,
  DENSITY_DISSIPATION: 10,
  CURL: 30,
  COLOR_PALETTE: ["#0000ff"],
  INITIAL: false,
  SIM_RESOLUTION: 128,
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
      webGLFluidEnhanced.simulation(canvasRef.current, FLUID_CONFIG);
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
