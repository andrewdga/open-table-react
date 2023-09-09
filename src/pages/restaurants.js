import { Route, Routes } from "react-router-dom";
import List from "./list";
import NewReservation from "./new-reservation";

export default function Restaurants() {
  return (
    <div className="main">
      <Routes>
        <Route path="/reservation" element={<NewReservation/>}/>
        <Route path="/" element={<List/>}/>
      </Routes>
    </div>
    
  )
}
