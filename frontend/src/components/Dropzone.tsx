import { useDropzone } from "react-dropzone";
import logoSmall from "./../resources/logo-small.svg";
import { useCallback, useState } from "react";
import Popup from "./Popup";
// import ImageGrid from "./ImageGrid";
export default function Dropzone() {
  const [image, setImage] = useState<File[]>([]);
  // const [duration, setDuration] = useState<number>(2000);
  const [message, setMessage] = useState<string>("");
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: useCallback((files) => {
      // setDuration(2000);
      setImage(files);
      const formData = new FormData();
      formData.append("image", files[0]);
      // console.log(files[0].size);
      fetch(
        `http://localhost:${import.meta.env.VITE_BACKEND_PORT}/api/upload`,
        {
          method: "POST",
          body: formData,
        },
      );
    }, []),
    maxFiles: 1,
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/gif": [],
      "image/jpg": [],
    },
    onError(err) {
      console.log(err);
    },
    maxSize: 2_100_000,
    onDropRejected: (error) => {
      setMessage(error[0].errors[0].message);
      setTimeout(() => setMessage(""), 5000);
    },
  });
  return (
    <div className="flex w-screen ">
      {message != "" && (
        <Popup message={message} direction="b" variant="error"></Popup>
      )}
      <div
        className={`min-w-screen md:min-w-180 sm:min-w-140 h-100 ${image.length == 1 ? "w-auto h-auto" : "sm:h-120 md:h-140"}  p-2 rounded-md m-auto`}
      >
        <div
          className={` shadow-lg shadow-border p-1 rounded-md h-full ${isDragActive && "scale-102"}`}
        >
          <div className="border-2 border-dashed border-border  h-full  rounded-md  ">
            <div {...getRootProps()} className=" w-full flex flex-col h-full">
              <input {...getInputProps()} />
              <div className=" m-auto ">
                {image && image.length == 1 ? (
                  image.map((item, index) => (
                    <div key={index}>
                      <img
                        src={URL.createObjectURL(item)}
                        alt={item.name}
                        className="p-2 rounded-2xl w-full h-auto"
                      ></img>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="flex justify-center ">
                      <img src={logoSmall} alt="logo small" className="h-10" />
                    </div>
                    <div className="text-text">
                      Drag & drop a file or <span>browse files</span>
                    </div>
                    <div className="text-text/50">
                      JPG, PNG or GIF - Max file size 2MB
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-3 bg-red-500 w-50">
        {image &&
          image.length > 0 &&
          image.map((item, index) => (
            <div key={index}>
              <img
                src={URL.createObjectURL(item)}
                alt={item.name}
                className=""
              ></img>
              <div> {item.name}</div>
            </div>
          ))}
      </div> */}
      {/* <ImageGrid image={image}></ImageGrid> */}
    </div>
  );
}
