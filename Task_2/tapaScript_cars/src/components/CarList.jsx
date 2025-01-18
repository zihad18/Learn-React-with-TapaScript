import CarItem from "./CarItem";
import PropType from 'prop-types'
function CarList({cars, checkTerm, searchTerm}) {
    const rows = []
    cars.forEach((car) => {
        if (car.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
            return;
        }
        if (checkTerm && !car.isPremium) {
            return;
        }
    rows.push(<CarItem key={car.id} car={car}/>);
    });

    return (
        <div className="py-4">
            <div className="list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {rows}
            </div>
          
        </div>
    )
}
CarList.propTypes = {
    cars: PropType.array.isRequired,
    checkTerm: PropType.bool.isRequired,
    searchTerm: PropType.string.isRequired,
}
export default CarList