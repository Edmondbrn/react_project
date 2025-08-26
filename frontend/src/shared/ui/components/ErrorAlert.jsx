
/**
 * Component to display an error alert with corresponding error message
 * @param {Object} param0 
 * @returns 
 */
function ErrorAlert({errorMessage}) {
    return (
        <div className="alert alert-danger py-2 mb-4 rounded-3 shadow-sm">
            {errorMessage}
        </div>
    )
}

export default ErrorAlert;