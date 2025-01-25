import PropType from 'prop-types';
import {Plus} from 'lucide-react'
function AddUser({addUser}) {
    return (

        <button className='bg-[#72D98C] mr-[82px] mt-[78px] w-[68px] h-[65px] flex items-center justify-center' onClick={addUser}><Plus/></button>
    )
}
AddUser.propTypes = {
    addUser: PropType.func.isRequired,
}
export default AddUser;
