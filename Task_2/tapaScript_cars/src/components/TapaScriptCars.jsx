import CarList from "./CarList";
import Check from "./Check";
import Header from "./Header";
import Search from "./Search";
function TapascriptCars() {
  return (
    <div className="container mx-auto p-2">
        <Header/>
        <div className="flex justify-start space-x-2 my-2">
            <Search/>
            <Check/>
        </div>
        
        <CarList/>
    </div>
  );
}
export default TapascriptCars;