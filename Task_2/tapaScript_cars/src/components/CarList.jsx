import CarItem from "./CarItem";
import PropType from 'prop-types'
function CarList({cars, checkTerm, searchTerm}) {

    return (
        <div className="py-4">
           <ul className="list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                cars.map((car)=>(
                    <li key={car.id} className="">
                        <CarItem car={car}/>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}
CarList.propTypes = {
    cars: PropType.array.isRequired,
    checkTerm: PropType.bool.isRequired,
    searchTerm: PropType.string.isRequired,
}
export default CarList