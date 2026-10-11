export default function DropzoneLoading() {
  return (
    <div style={containerStyle}>
      {/* Conteneur de la barre de chargement (le fond) */}
      <div style={progressTrackStyle}>
        {/* La barre de couleur qui s'anime */}
        <div style={progressBarStyle}></div>
      </div>
      <p style={textStyle}>Please wait...</p>
    </div>
  );
}

// Conteneur principal
const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "14px",
  padding: "24px",
  width: "100%",
};

// Fond gris de la barre de chargement
const progressTrackStyle = {
  width: "200px",
  height: "6px",
  backgroundColor: "#e0e0e0",
  borderRadius: "4px",
  overflow: "hidden",
  position: "relative",
};

// La barre de chargement animée (bleue ici, modifiable)
const progressBarStyle = {
  position: "absolute",
  height: "100%",
  width: "40%",
  backgroundColor: "#3498db", // Changez la couleur ici (ex: #4CAF50 pour du vert)
  borderRadius: "4px",
  animation: "loadingBar 1.5s infinite ease-in-out",
};

const textStyle = {
  fontFamily: "sans-serif",
  fontSize: "14px",
  fontWeight: "500",
  color: "#555",
  margin: 0,
};

// Injection CSS de l'effet de va-et-vient de la barre
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = `
    @keyframes loadingBar {
      0% { left: -40%; }
      50% { left: 100%; width: 40%; }
      100% { left: 100%; width: 0%; }
    }
  `;
  document.head.appendChild(styleSheet);
}
