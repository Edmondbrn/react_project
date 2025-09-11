

/**
 *  Component to creat an XL container from Bootstrap
 * @param {props} children components to insert inside the container 
 * @returns 
 */
export default function ContainerXl({ children, className = "" }) {
  return (
    <div className={`container-xl py-4 ${className}`}>
      <div className="content-wrapper">
        {children}
      </div>
    </div>
  );
}