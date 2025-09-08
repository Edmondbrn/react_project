
/**
 * A component to insert the logo of the webapp
 * @param {String} logoWidth the width of the logo, default 64px
 * @returns 
 */
function Logo( {logoWidth = "128px"}) {
    return(
        <img src="/deepgen_logo.png" alt="deepgen logo" style={{width : logoWidth, maxWidth : "512px", minWidth : "64px" , cursor : "pointer" }} />
    );
}

export default Logo;