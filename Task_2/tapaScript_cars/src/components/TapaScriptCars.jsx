import CarList from "./CarList";
import Check from "./Check";
import Header from "./Header";
import Search from "./Search";
import { useState } from "react";
const Cars = [   
  { id: 1, title: "Luxury Sedan", brand: "Mercedes", year: 2023, price: 80000, isPremium: true },
  { id: 2, title: "Family SUV", brand: "Toyota", year: 2022, price: 45000, isPremium: false },
  { id: 3, title: "Sports Car", brand: "Porsche", year: 2023, price: 120000, isPremium: true },
  { id: 4, title: "Electric Hatchback", brand: "Nissan", year: 2022, price: 35000, isPremium: false },
  { id: 5, title: "Luxury SUV", brand: "BMW", year: 2023, price: 90000, isPremium: true },
];
function TapascriptCars() {
  const [searchTerm, setSearchTerm] = useState("");
  const [checkTerm, setCheckTerm] = useState(false);
  const onCheckTerm = () => {
    setCheckTerm(!checkTerm);
  };
  return (
    <div className="container mx-auto p-2">
        <Header/>
        <div className="flex justify-start space-x-2 my-2">
            <Search searchTerm={searchTerm} onSerachTerm={setSearchTerm}/>
            <Check checkTerm={checkTerm} onCheckTerm={onCheckTerm} />
        </div>
        
        <CarList cars={Cars} checkTerm={checkTerm} searchTerm={searchTerm} />
    </div>
  );
}
export default TapascriptCars;