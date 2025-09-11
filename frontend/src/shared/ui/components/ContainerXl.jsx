

/**
 *  Component to creat an XL container from Bootstrap
 * @param {props} children components to insert inside the container 
 * @returns 
 */
export default function ContainerXl({children}) {
    return (
        <div className="container-xl">
            {children}
        </div>
    )
}