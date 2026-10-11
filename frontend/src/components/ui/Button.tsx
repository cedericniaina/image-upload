export default function DropzoneLoading() {
  return (
    <div className="flex flex-col items-center justify-center gap-3.5 p-6 w-full">
      {/* Conteneur de la barre de chargement (le fond) */}
      <div className="w-[200px] h-1.5 bg-gray-200 rounded overflow-hidden relative">
        {/* La barre de couleur qui s'anime */}
        <div className="absolute h-full w-2/5 bg-blue-500 rounded left-0 animate-pulse"></div>
      </div>
      <p className="font-sans text-sm font-medium text-gray-600 m-0">
        Please wait...
      </p>
    </div>
  );
}
