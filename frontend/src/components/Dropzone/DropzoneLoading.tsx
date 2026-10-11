export default function DropzoneLoading() {
  return (
    <div className="flex flex-col items-center justify-center gap-[14px] p-6 w-full">
      {/* Conteneur de la barre de chargement (le fond) */}
      <div className="w-[200px] h-[6px] bg-gray-200 rounded overflow-hidden relative">
        {/* La barre de couleur animée en v4 */}
        <div className="absolute h-full w-[40%] bg-[#3498db] rounded animate-loading-bar"></div>
      </div>
      <p className="font-sans text-sm font-medium text-gray-600 m-0">
        Please wait...
      </p>
    </div>
  );
}
