import { TouchContext } from "@/app/_providers/TouchContext";
import { useContext } from "react";

export const useTouch = () => {
  const { isTouch } = useContext(TouchContext);

  return { isTouch };
};
