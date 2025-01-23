import UserList from './UserList';
function UserInfo() {
    const InitialUsers = [
        {
          id: crypto.randomUUID(),
          fullName: 'Latifur Rahman',
          age: 25,
          occupation: 'Student',
        },
        {
          id: crypto.randomUUID(),
          fullName: 'Mehedi Hasan',
          age: 26,
          occupation: 'Lecturer',
        },
        {
          id: crypto.randomUUID(),
          fullName: 'Sadia Tasnim',
          age: 21,
          occupation: 'Student',
        },
        {
          id: crypto.randomUUID(),
          fullName: 'Nasir Uddin',
          age: 30,
          occupation: 'Software Engineer',
        },
      ];
    return (
      <div>
        <UserList users={InitialUsers} />
      </div>
    )
}
export default UserInfo;