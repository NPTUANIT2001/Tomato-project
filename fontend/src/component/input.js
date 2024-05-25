import PropTypes from "prop-types";
const Input = ({
  type,
  inputRef,
  id,
  label,
  frmField,
  errMessage,
  lastRow,
  required,
  ...others
}) => {
  // labelClass += `${required ?"required":""}`
  const inputClass = `form-control ${errMessage ? "is-invalid" : ""}`;
  return (
    <>
      <div className={`row ${lastRow ? "" : "mb-3"}`}>
        <label htmlFor={id} className="col-sm-3 col-form-label">
          {label}
        </label>
        <div className="col-sm">
          <input
            type={type}
            className={inputClass}
            id={id}
            ref={inputRef}
            {...frmField}
            {...others}
          />

          {errMessage ? (
            <div className="invalid-feedback">{errMessage}</div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};
Input.propTypes = {
  type: PropTypes.oneOf([
    "text",
    "email",
    "url",
    "tel",
    "password",
    "number",
    "search",
  ]),
  inputRef: PropTypes.object,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  label: PropTypes.string.isRequired,
  lastRow: PropTypes.bool,

  frmField: PropTypes.object,
  errMessage: PropTypes.string,
  rows: PropTypes.number,
};
export default Input;
