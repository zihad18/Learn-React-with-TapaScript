import PropType from 'prop-types';
function UserStatus({ userNumber }) {
  
  return (
    <div>
        <h1 className='text-2xl font-bold mb-6'>{userNumber}</h1>
    </div>
  );
}
UserStatus.propTypes = {
  userNumber: PropType.number.isRequired,
}
export default UserStatus;