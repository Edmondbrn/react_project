
/**
 * Component to create a button with a loading spinner after clicking on it. It takes a function to call after clicking on it
 * @param {Object} param0 
 * @returns 
 */
function LoadingBtn({text, isLoading, onClickFunction, className = ""}) {

    return(
            <button 
                type="submit" 
                className={className === "" ? "btn btn-primary my-3 w-100" : className} 
                disabled={isLoading}
                onClick={onClickFunction}>
                {isLoading ? (
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                ) : (
                    text
                )}
            </button>
    );

}

export default LoadingBtn;