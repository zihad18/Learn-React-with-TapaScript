import PropTypes from 'prop-types';
function Check({onCheckTerm, checkTerm}) {
  
  return (
    <div className="inline-block">
      <input type="checkbox" checked={checkTerm} onChange={onCheckTerm}/>
      <label>Show Premium only</label>
    </div>
  );
}
Check.propTypes = {
  onCheckTerm: PropTypes.bool,
  checkTerm: PropTypes.func
}
export default Check;   