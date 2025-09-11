/**
 * Function that will create a react form field based on given information
 * @param {Object} param0 
 * @returns 
 */
function FormField({ label, name, type, value, onChange, error, icon, showLabel = true, className = "", id = null }) {
  if (icon) {
    return (
      <div className = {className}>
        {showLabel && <label className="form-label">{label}</label>}
        <div className="input-group">
          <span className="input-group-text">{icon}</span>
          <input
            type={type || 'text'}
            name={name}
            className={`form-control ${error ? 'is-invalid' : ''}`}
            id = {id}
            value={value}
            onChange={onChange}
            placeholder={!showLabel ? label : undefined}
          />
          {error && <div className="invalid-feedback">{error}</div>}
        </div>
      </div>
    );
  }

  return (
    <div className = {className}>
      {showLabel && <label className="form-label">{label}</label>}
      <input
        type={type || 'text'}
        name={name}
        className={`form-control ${error ? 'is-invalid' : ''}`}
        id = {id}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}
export default FormField;