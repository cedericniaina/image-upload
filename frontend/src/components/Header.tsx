import logo from "../resources/logo.svg";
import sun_fill from "../resources/Sun_fill.svg";
import moon_fill from "../resources/Moon_fill.svg";
import { useEffect, useState } from "react";

export default function Header() {
  const [dark, setDark] = useState<boolean | null>(null);
  useEffect(() => {
    if (localStorage.getItem("theme") == null) {
      localStorage.setItem("theme", "default");
    } else {
      if (dark == null) {
        const the_theme =
          localStorage.getItem("theme") == "dark" ? "dark" : "default";
        document.documentElement.setAttribute("data-theme", the_theme);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setDark(the_theme == "dark");
      } else {
        localStorage.setItem("theme", dark ? "dark" : "default");
        document.documentElement.setAttribute(
          "data-theme",
          dark ? "dark" : "default",
        );
      }
    }
  }, [dark]);
  return (
    <div className="flex flex-row justify-between py-4 mb-2 px-10 border-b border-border">
      <div className="">
        <img
          src={logo}
          alt="logo"
          className={`h-10 ${dark == true && "invert"}`}
        />
      </div>
      <div>
        <button
          onClick={() => {
            setDark(dark == true ? false : true);
          }}
          className="border-border border rounded-md"
        >
          <img
            src={dark ? sun_fill : moon_fill}
            alt="theme-icon"
            className="p-2"
          />
        </button>
      </div>
    </div>
  );
}
