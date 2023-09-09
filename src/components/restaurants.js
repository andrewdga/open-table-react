import RestaurantsList from "./restaurantsList"
export default function Restaurants() {
  const restaurants = [
    { name: 'The Golden Apple', location: 'San Francisco, CA' },
    { name: 'Dumpling House', location: 'Portland, OR' },
    { name: 'The Salty Pig', location: 'Boston, MA' },
    { name: 'The Noodle Shop', location: 'New York, NY' },
    { name: 'The Blue Corn', location: 'Austin, TX' }
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
