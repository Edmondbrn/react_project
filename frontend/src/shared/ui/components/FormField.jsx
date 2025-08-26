
/**
 * Function that will create a react form field based on given information
 * @param {Object} param0 
 * @returns 
 */
function FormField({ label, name, type, value, onChange, error }) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        type={type || 'text'}
        name={name}
        className={`form-control ${error ? 'is-invalid' : ''}`}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}
export default FormField;