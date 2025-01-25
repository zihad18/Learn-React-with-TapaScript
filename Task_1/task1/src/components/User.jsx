import PropType from 'prop-types';
function User({user}) {
    return (
      <div className='w-[365px] h-[155px] border-2 border-[#111]  flex flex-col gap-2  font-inter font-semibold text-3xl ' >
        <h1 className='ml-[24px] mt-[16px]'>{user.fullName}</h1>
        <p className='ml-[24px]'>Age: {user.age}</p>
        <p className='ml-[24px]'>{user.occupation}</p>
      </div>
    )
}
User.propTypes = {
    user: PropType.object.isRequired,
}
export default User;