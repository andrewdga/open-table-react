import RestaurantsList from "./restaurantsList"
import ReviewList from "./reviewList"
import { useEffect, useState } from "react"


export default function Restaurants() {
  const [restaurants, setRestaurants] = useState([])
  const fetchRestaurants = async () => {
    const response = await fetch('http://localhost:5000/restaurants')
    const data = await response.json()
    setRestaurants(data)
  }
  const [activeReviews, setActiveReviews] = useState([])

  useEffect(() => {
    fetchRestaurants()
  }, []);

  const [activeRestaurant, setActiveRestaurant] = useState(null)

  function toggleReview(restaurant) {
    if (activeRestaurant === restaurant.name) {
      setActiveRestaurant(null)
    } else {
      setActiveRestaurant(restaurant)
    }
  }

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Restaurants</h2>
          <div className="grid grid-cols-2">
            <RestaurantsList restaurants={restaurants} toggleReview={toggleReview}/>
            <ReviewList activeRestaurant={activeRestaurant} />
          </div>
          
        </div>
      </div>
    </div>
  )
}
