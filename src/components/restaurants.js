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

  const xrestaurants = [
    {
      name: 'The Golden Apple',
      location: 'San Francisco, CA',
      image: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
      reviewers: [
        { name: 'Cecilia Chavez', imageUrl: 'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
        { name: 'Emily Selman', imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
        { name: 'Kristin Watson', imageUrl: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
        { name: 'Celeste Burton', imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
      ]
    },
    {
      name: 'Dumpling House',
      location: 'Portland, OR',
      image: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
      reviewers: [
        { name: 'Cecilia Chavez', imageUrl: 'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
        { name: 'Emily Selman', imageUrl: 'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
        { name: 'Kristin Watson', imageUrl: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' }
      ]
    },
    { name: 'The Salty Pig', location: 'Boston, MA', image: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg', reviewers: [] },
    { name: 'The Noodle Shop', location: 'New York, NY', image: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg', reviewers: [] },
    { name: 'The Blue Corn', location: 'Austin, TX', image: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg', reviewers: [] },
  ]
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
