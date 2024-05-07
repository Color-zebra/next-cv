import { RefObject } from "react";

export const passMouseEvent = (
  event: MouseEvent,
  targetRef: RefObject<HTMLCanvasElement>,
) => {
  const target = targetRef.current;
  if (target) {
    target.dispatchEvent(new MouseEvent(event.type, event));
  }
};
