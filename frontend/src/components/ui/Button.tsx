interface Props {
  icon?: string;
  iconAlt?: string;
  text: string;
  actionClick?: () => void;
}

export default function Button({
  icon,
  text,
  iconAlt = "Icon",
  actionClick,
}: Props) {
  return (
    <button
      onClick={actionClick}
      className="flex flex-row justify-between bg-accent border-border hover:scale-105 active:scale-95 px-2 my-2 h-10 w-27 rounded-md"
    >
      <div className="flex h-full w-7 justify-center">
        <img src={icon} alt={iconAlt} className="m-auto w-5 h-5" />
      </div>{" "}
      <p className="m-auto pl-1 w-full">{text}</p>
    </button>
  );
}
