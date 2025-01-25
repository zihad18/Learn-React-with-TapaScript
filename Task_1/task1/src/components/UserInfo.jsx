import UserList from './UserList';
import UserStatus from './UserStatus';
import AddUser from './AddUser';
import Header from './Header';
import { useState } from 'react';
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
    const [users, setUsers] = useState(InitialUsers);

    function addNewUser() {
    const firstName = ['John', 'Jane', 'Doe', 'Smith', 'Alex', 'Michael', 'David', 'James', 'Robert', 'William','Tapas']
    const lastName = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez','Rahman','Adikary']
    const occupation = ['Student', 'Lecturer', 'Software Engineer', 'Teacher', 'Doctor', 'Lawyer', 'Accountant', 'Chef', 'Artist', 'Engineer','Teacher']
    const RandomFullName = firstName[Math.floor(Math.random() * firstName.length)] + ' ' + lastName[Math.floor(Math.random() * lastName.length)];
    const RandomAge = Math.floor(Math.random() * 50) + 20;
    const RandomOccupation = occupation[Math.floor(Math.random() * occupation.length)];

    const newUser = {
        id: crypto.randomUUID(),
        fullName: RandomFullName,
        age: RandomAge,
        occupation: RandomOccupation,
    };
    setUsers([...users, newUser]);

    }
      
    return (
      <div>
        <Header />
        <div className='flex justify-between'>
          <UserStatus userNumber={users.length} />
          <AddUser addUser={addNewUser} />
        </div>
        <UserList users={users} />
      </div>
    )
}
export default UserInfo;