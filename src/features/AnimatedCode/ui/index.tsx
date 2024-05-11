"use client";

import { HTMLAttributes, useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import s from "./AnimatedCode.module.scss";
import clsx from "clsx";
import { codeExample } from "../model";

interface AnimatedCodeProps extends HTMLAttributes<HTMLDivElement> {}

const TYPE_INTERVAL = 50;
const SHOW_TIME = 5000;

export const AnimatedCode = ({ className, ...props }: AnimatedCodeProps) => {
  const [shownCode, setShownCode] = useState("");
  const [currExampleIndex, setCurrExampleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (shownCode.length >= codeExample[currExampleIndex].length) {
        clearInterval(interval);
        setTimeout(() => {
          setCurrExampleIndex((prev) =>
            prev >= codeExample.length - 1 ? 0 : (prev += 1),
          );
          setShownCode("");
        }, SHOW_TIME);
        return;
      }

      setShownCode(
        (prev) => (prev += codeExample[currExampleIndex][prev.length]),
      );
    }, TYPE_INTERVAL);

    return () => clearInterval(interval);
  }, [currExampleIndex, shownCode.length]);

  return (
    <div className={clsx(s.wrapper, className)} {...props}>
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {shownCode}
      </SyntaxHighlighter>
    </div>
  );
};
