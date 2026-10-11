// import downloadIcon from "../../resources/download.svg";
// import LinkIcon from "../../resources/Link.svg";
// import Button from "../ui/Button";

export default function DropzoneImage({
  imgUrl,
  imgName,
}: {
  imgUrl: string;
  imgName: string;
}) {
  return (
    <div>
      <img
        // src={`${backendUrl}${image.fileUrl}`}
        src={imgUrl}
        alt={imgName}
        className="p-2 rounded-2xl w-full h-auto"
      ></img>

      {/* <div className="w-full flex justify-evenly flex-row">
        <Button text="Share" icon={LinkIcon} iconAlt="LinkIcon"></Button>
        <Button
          text="Download"
          icon={downloadIcon}
          iconAlt="iconDownload"
        ></Button>
      </div> */}
    </div>
  );
}
