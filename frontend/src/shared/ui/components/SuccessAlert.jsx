import { useState, useEffect } from 'react';

/**
 * Component to display a success alert with corresponding sucess message
 * @param {Object} param0 
 * @returns 
 */
function SuccessAlert({successMessage, dismissible = true, timeout = 0 }) {

    const [visible, setVisible] = useState(true);
    
    useEffect(() => {
    if (timeout > 0) {
        const timer = setTimeout(() => setVisible(false), timeout);
        return () => clearTimeout(timer);
    }
    }, [timeout]);

    useEffect(() => {
        setVisible(true)
    }, [successMessage])

    return (
        <div className="alert alert-success py-2 mb-4 rounded-3 shadow-sm d-flex">
            <div className = "flex-grow">
                {successMessage}
            </div>
            {dismissible && (
                <button type="button" className="btn-close" onClick={() => setVisible(false)}></button>
            )}
        </div>
    )
}

export default SuccessAlert;