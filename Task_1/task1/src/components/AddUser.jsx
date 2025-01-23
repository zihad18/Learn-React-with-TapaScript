import PropType from 'prop-types';
function AddUser({addUser}) {
    return (
        <button onClick={addUser}>+</button>
    )
}
AddUser.propTypes = {
    addUser: PropType.func.isRequired,
}
export default AddUser;