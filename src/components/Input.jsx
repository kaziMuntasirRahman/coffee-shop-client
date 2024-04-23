import PropTypes from 'prop-types';
const Input = ({ inputType }) => {
  return (
    <label className="input-field form-control w-full">
      <div className="label">
        <span className="label-text font-semibold text-lg">{inputType.charAt(0).toUpperCase() + inputType.slice(1)}</span>
      </div>
      <input type={inputType === 'email' ? 'email' : 'text'} name={inputType} placeholder={inputType} className="input input-bordered w-full" />
      <div className="label">
      </div>
    </label>
  );
};

Input.propTypes = {
  inputType: PropTypes.string,
}

export default Input;