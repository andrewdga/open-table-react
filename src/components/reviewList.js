export default function ReviewList(props) {

  const loaded = function() {
    return  (
       <div className="bg-white shadow overflow-hidden sm:rounded-lg">
    <ul>
      {props.activeRestaurant.reviewers.map((reviewer) => (
        <li className="flex justify-between border-b py-4 px-4 mb-4 text-left text-sm bg-gray-50 rounded shadow" key={reviewer.name}>
          {reviewer.review}
          <span className="text-xs">
            by: {reviewer.name}
          </span>
        </li>
      ))}
    </ul>
  </div>)  
  }

  const loading = function() {
    return <div>Loading...</div>
  }
  
  return props.activeRestaurant ? loaded() : loading()
}
