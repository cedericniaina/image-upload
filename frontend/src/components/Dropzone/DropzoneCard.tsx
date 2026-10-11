import logoSmall from "./../../resources/logo-small.svg";
export default function DropzoneCard() {
  return (
    <>
      <div className="flex justify-center ">
        <img src={logoSmall} alt="logo small" className="h-10" />
      </div>
      <div className="text-text">
        Drag & drop a file or <span>browse files</span>
      </div>
      <div className="text-text/50">JPG, PNG or GIF - Max file size 2MB</div>
    </>
  );
}
