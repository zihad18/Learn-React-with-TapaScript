import PropTypes from 'prop-types';
function CarItem({car}) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
      <h1 className="text-lg font-bold mb-2">{car.title}</h1>
      <div>
      <div>
        <span className="text-md font-bold">Brand: </span>
          {car.brand}</div>
      <div>
        <span className="text-md font-bold">Year: </span>
        {car.year}</div>
      <div>
        <span className="text-md font-bold">Price: </span>
          {car.price}</div>
      <div>
        <span className="text-md font-bold"> Premium: </span>
          {car.isPremium ? "Yes" : "No"}</div>
    </div>
    </div>
  );
}
export default CarItem;

CarItem.propTypes = {
    car: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.number,
        year: PropTypes.number,
        brand: PropTypes.string,
        isPremium: PropTypes.bool
    })
};