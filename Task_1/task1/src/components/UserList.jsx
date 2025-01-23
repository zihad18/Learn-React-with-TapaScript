import PropType from 'prop-types';
import User from './User';
function UserList({users}) {
    let row = []
    users.forEach((user) => {
        row.push(<User key={user.id} user={user}/>);
    });

    return (
        <div>
            {row}
        </div>
    );
}

UserList.propTypes = {
    users: PropType.array.isRequired,
}
export default UserList;