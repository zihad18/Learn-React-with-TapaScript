import PropType from 'prop-types';
import User from './User';
function UserList({users}) {
    let row = []
    users.forEach((user) => {
        row.push(<User key={user.id} user={user}/>);
    });

    return (
        <div className='ml-[54px] mt-[60px] grid grid-cols-3 gap-x-[113px] gap-y-[116px] pb-8'>
            {row}
        </div>
    );
}

UserList.propTypes = {
    users: PropType.array.isRequired,
}
export default UserList;