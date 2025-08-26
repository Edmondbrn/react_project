

/**
 * Component to insert a button to submit a form whith a loading spinner
 * @param {Object} param0 an array xontaining the text content for the button and the boolean to known if loading
 * @returns 
 */
function LoadingFormBtn({text, isLoading}) {
        return (
            <button 
                type="submit" 
                className="btn btn-primary my-3 w-100" 
                disabled={isLoading}>
                {isLoading ? (
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                ) : (
                    text
                )}
            </button>
        );
}

export default LoadingFormBtn;