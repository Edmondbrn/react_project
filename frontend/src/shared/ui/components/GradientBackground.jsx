
/**
 * Component to crate the login and signin page background
 * @param {Object} param0 
 * @returns 
 */
function GradientBackground({ children, gradientColors = "43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%" }) {
  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center position-relative overflow-hidden" 
         style={{
             padding: "1rem",
             background: "#4158D0",
             backgroundImage: `linear-gradient(${gradientColors})`
         }}>
        {/* Modern background shapes */}
        <div className="position-absolute" style={{
            width: "600px",
            height: "600px",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "35% 65% 60% 40% / 70% 30% 70% 30%",
            top: "-250px",
            left: "-100px",
            zIndex: 0,
            animation: "morph 15s linear infinite alternate"
        }}></div>
        <div className="position-absolute" style={{
            width: "500px",
            height: "500px",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "60% 40% 30% 70% / 40% 50% 60% 50%",
            bottom: "-200px",
            right: "-100px",
            zIndex: 0,
            animation: "morph 13s linear infinite alternate"
        }}></div>
        
        {/* Render the children components */}
        {children}
    </div>
  );
}

export default GradientBackground;