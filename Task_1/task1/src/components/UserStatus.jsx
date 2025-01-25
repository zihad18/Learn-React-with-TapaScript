import PropType from 'prop-types';
function UserStatus({ userNumber }) {
  
  return (
    <div className='inline-block bg-[#72D98C] ml-[54px] mt-[55px] w-[348px] h-[91px] flex items-center  font-inter font-semibold text-3xl'>
      <h1 className='ml-[16px]'>Total Users: </h1>
        <h1 className='ml-[38px]'>{userNumber}</h1>
    </div>
  );
}
UserStatus.propTypes = {
  userNumber: PropType.number.isRequired,
}
export default UserStatus;