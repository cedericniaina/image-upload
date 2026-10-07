// import { useEffect, useState } from "react";

interface Props {
  variant?: "error" | "warning" | "success" | "info";
  message: string;
  direction?: "t" | "b" | "tr" | "tl" | "br" | "bl" | "tc" | "bc";
  //   duration?: number;
  //   hidden: boolean;
}

export default function Popup({
  message,
  variant,
  direction,
  //   duration,
  //   hidden,
}: Props) {
  //   const [open, setOpen] = useState<boolean>(hidden);
  const style =
    variant == "error"
      ? "bg-red-400"
      : variant == "success"
        ? "bg-green-400"
        : variant == "warning"
          ? "bg-orange-400"
          : variant == "info"
            ? "bg-blue-400"
            : "bg-blue-400";
  const position =
    direction == "b"
      ? "bottom-0"
      : direction == "t"
        ? "top-0"
        : direction == "br"
          ? "bottom-0 right-0"
          : direction == "bl"
            ? "bottom-0 left-0"
            : direction == "tr"
              ? "top-0 right-0"
              : direction == "tl"
                ? "top-0 left-0"
                : direction == "bc"
                  ? "top-0 right-1/2"
                  : direction == "tc"
                    ? "top-0 left-1/2"
                    : "bottom-0";
  //   useEffect(() => {
  //     setTimeout(() => setOpen(!hidden), duration);
  //   }, []);
  return (
    <dialog
      className={`min-w-30 text-center rounded-md whitespace-nowrap max-w-100 py-1 px-5 m-5 fixed ${style} ${position}`}
      open
    >
      {message}
    </dialog>
  );
}
