import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import Popup from "./Popup";
import { useMutation } from "@tanstack/react-query";
import ImageProvider from "../provider/ImageProvider";
import DropzoneImage from "./Dropzone/DropzoneImage";
import DropzoneCard from "./Dropzone/DropzoneCard";
import DropzoneLoading from "./Dropzone/DropzoneLoading";
import Button from "./ui/Button";
import downloadIcon from "../resources/download.svg";
import LinkIcon from "../resources/Link.svg";

export default function Dropzone() {
  const {
    mutate,
    data: image,
    isPending,
  } = useMutation({ mutationFn: ImageProvider });
  const [backendUrl] = useState(import.meta.env.VITE_BACKEND_LINK);
  // console.log("BOOM : " + backendUrl);
  const [message, setMessage] = useState<string>("");
  const [messageVariant, setMessageVariant] = useState<
    "error" | "warning" | "success" | "info"
  >("info");
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: useCallback(
      (files) => {
        const theFormData = new FormData();
        theFormData.append("image", files[0]);
        mutate(theFormData);
        console.log("THAT");
      },
      [mutate],
    ),
    maxFiles: 1,
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/gif": [],
    },
    onError(err) {
      console.log(err);
    },
    maxSize: 2_100_000,
    onDropRejected: (error) => {
      setMessage(error[0].errors[0].message);
      setMessageVariant("error");
      setTimeout(() => setMessage(""), 5000);
    },
  });
  const LinkCopied = (link: string) => {
    navigator.clipboard.writeText(link);
    setMessage("Link copied");
    setMessageVariant("info");
    setTimeout(() => setMessage(""), 5000);
  };
  const DownloadImage = async (downloadUrl: string, fileName: string) => {
    const req = await fetch(backendUrl + downloadUrl);
    const blob = await req.blob();

    const urlLocale = window.URL.createObjectURL(blob);
    const lien = document.createElement("a");
    lien.href = urlLocale;
    lien.download = fileName; // Nom générique du fichier téléchargé

    document.body.appendChild(lien);
    lien.click();

    document.body.removeChild(lien);
    window.URL.revokeObjectURL(urlLocale);

    setMessage("⏳ Downloading... Please wait.");

    setMessageVariant("info");
    setTimeout(() => setMessage(""), 5000);
    console.log("OK");
  };
  return (
    <div className={`flex w-screen`}>
      {message != "" && (
        <Popup message={message} direction="b" variant={messageVariant}></Popup>
      )}
      <div
        className={`min-w-screen md:min-w-180 sm:min-w-140 h-100 ${image ? "w-auto h-auto" : "sm:h-120 md:h-140"}  p-2 rounded-md m-auto`}
      >
        <div
          className={` shadow-lg shadow-border p-1 rounded-md h-full ${isDragActive && "scale-102"} `}
        >
          <div className="border-2 border-dashed border-border  h-full  rounded-md  ">
            <div {...getRootProps()} className=" w-full flex flex-col h-full">
              <input {...getInputProps()} />
              <div className=" m-auto ">
                {isPending ? (
                  <DropzoneLoading></DropzoneLoading>
                ) : image ? (
                  <DropzoneImage
                    imgUrl={backendUrl + image.fileUrl}
                    imgName={image.fileName}
                  ></DropzoneImage>
                ) : (
                  <DropzoneCard></DropzoneCard>
                )}
              </div>
            </div>
            {image && (
              <div className="w-full flex justify-evenly flex-row">
                <Button
                  text="Share"
                  icon={LinkIcon}
                  iconAlt="LinkIcon"
                  actionClick={() => LinkCopied(backendUrl + image.fileUrl)}
                ></Button>
                <Button
                  text="Download"
                  icon={downloadIcon}
                  iconAlt="iconDownload"
                  actionClick={() =>
                    DownloadImage(image.fileDownload, image.fileName)
                  }
                ></Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        {/* {imagePost &&
          imagePost.map((c, i) => (
            <>
              <div key={i}>{c.fileurl}</div>
            </>
          ))} */}
      </div>
      {/* <div className="grid grid-cols-3 bg-red-500 w-50">
        <div>
          <img
            src={"http://localhost:3000/uploads/arthure-1.jpg"}
            alt={"TTT"}
            className=""
          ></img>
          <div> {"DdD"}</div>
        </div>
      </div> */}
      {/* <ImageGrid image={image}></ImageGrid> */}
    </div>
  );
}
