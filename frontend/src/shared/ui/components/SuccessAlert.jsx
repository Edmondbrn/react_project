
/**
 * Component to display a success alert with corresponding sucess message
 * @param {Object} param0 
 * @returns 
 */
function SuccessAlert({successMessage}) {
    return (
        <div className="alert alert-success py-2 mb-4 rounded-3 shadow-sm">
            {successMessage}
        </div>
    )
}

export default SuccessAlert;