import PropType from 'prop-types';
function User({user}) {
    return (
      <div>
        <h1>{user.fullName}</h1>
        <p>{user.age}</p>
        <p>{user.occupation}</p>
      </div>
    )
}
User.propTypes = {
    user: PropType.object.isRequired,
}
export default User;