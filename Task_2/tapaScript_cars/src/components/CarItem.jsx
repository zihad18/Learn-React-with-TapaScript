import PropTypes from 'prop-types';
function CarItem({car}) {
  return (
    <div>
      <h1 className="text-lg font-bold">{car.title}</h1>
      <div>
      <div>
      <span className="text-md font-bold">Brand:</span>
        {car.brand}</div>
      <div>
        <span className="text-md font-bold">Year:</span>
        {car.year}</div>
      <div>
      <span className="text-md font-bold">Price:</span>
        {car.price}</div>
      <div>
      <span className="text-md font-bold"> Premium:</span>
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