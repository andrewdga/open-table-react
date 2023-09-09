import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline'
import { useState } from "react"


export default function RestaurantsList(props) {
  const [showReviewForRestaurant, setShowReviewForRestaurant] = useState(null)

  function toggleReview(restaurantName) {
    if (showReviewForRestaurant === restaurantName) {
      setShowReviewForRestaurant(null)
    } else {
      setShowReviewForRestaurant(restaurantName)
    }
  }

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {props.restaurants.map((restaurant) => (
        <>
          <li
            key={restaurant.name}
            className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap"
          >
            <div>
              <p className="hover:underline text-sm font-semibold leading-6 text-gray-900" onClick={function() { toggleReview(restaurant.name)}}>
                {restaurant.name}
              </p>
            </div>
            <dl className="flex w-full flex-none justify-between gap-x-8 sm:w-auto">
              <div className="flex -space-x-0.5">
                <dt className="sr-only">Commenters</dt>
                {restaurant.reviewers.map((reviewer) => (
                  <dd key={reviewer.name}>
                    <img
                      className="h-6 w-6 rounded-full bg-gray-50 ring-2 ring-white"
                      src={reviewer.imageUrl}
                      alt={reviewer.name}
                    />
                  </dd>
                ))}
              </div>
              <div className="flex w-16 gap-x-2.5">
                <dt>
                  <span className="sr-only">Total reviews</span>
                  <ChatBubbleLeftIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd className="text-sm leading-6 text-gray-900">{restaurant.reviewers.length}</dd>
              </div>
            </dl>
          </li>
          { showReviewForRestaurant === restaurant.name && (
            <ul>
              {restaurant.reviewers.map((reviewer) => (
                <li className="flex justify-between border-b py-4 px-4 mb-4 text-left text-sm bg-gray-50 rounded shadow" key={reviewer.name}>
                  {reviewer.review}
                  <span className="text-xs">
                    by: {reviewer.name}
                  </span>
                
                </li>
              ))}
            </ul>
          )}
        </>
        ))}
      </ul>
  )
}
