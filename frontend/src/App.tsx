import "./App.css";
import Dropzone from "./components/Dropzone";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <div className="h-fit">
        <Header></Header>
      </div>
      <div className="text-text flex w-full h-full">
        <Dropzone></Dropzone>
      </div>
    </div>
  );
}
