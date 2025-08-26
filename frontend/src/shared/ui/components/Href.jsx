

/**
 * Component to insert a Href tag with the redirection link
 * @param {Object} param0 
 * @returns 
 */
function Href({hrefLink, hrefText}) {
    return (
        <a href={hrefLink} className="small">{hrefText}</a>
    );
}

export default Href;