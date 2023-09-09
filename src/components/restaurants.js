import RestaurantsList from "./restaurantsList"
import { useEffect, useState } from "react"


export default function Restaurants() {
  const [restaurants, setRestaurants] = useState([])
  const fetchRestaurants = async () => {
    const response = await fetch('http://localhost:5000/restaurants')
    const data = await response.json()
    setRestaurants(data)
  }

  useEffect(() => {
    fetchRestaurants()
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Restaurants</h2>
          <RestaurantsList restaurants={restaurants} />
        </div>
      </div>
    </div>
  )
}
