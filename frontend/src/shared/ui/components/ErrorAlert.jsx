import { useState, useEffect } from 'react';
import { BsExclamationTriangleFill } from "react-icons/bs";

/**
 * Component to display an error alert with corresponding error message
 * @param {Object} param0 
 * @returns 
 */
function ErrorAlert({ errorMessage, dismissible = true, timeout = 0 }) {
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    if (timeout > 0) {
      const timer = setTimeout(() => setVisible(false), timeout);
      return () => clearTimeout(timer);
    }
  }, [timeout]);

  useEffect(() => {
    setVisible(true)
  }, [errorMessage])

  if (!visible) return null;

  return (
    <div className="alert alert-danger py-2 mb-4 rounded-3 shadow-sm d-flex align-items-center" role="alert">
      <BsExclamationTriangleFill className = "me-3"/>
      <div className="flex-grow-1">
        {errorMessage}
      </div>
      {dismissible && (
        <button type="button" className="btn-close" onClick={() => setVisible(false)}></button>
      )}
    </div>
  );
}

export default ErrorAlert;