import { Link } from "react-router-dom"

const Pet = (props) => {
  // destructure props --> pets: name, animal, breed, images, dll
  const { name, animal, breed, images, location, id } = props

  let hero = "http://pets-images.dev-apis.com/pets/none.jpg"
  if (images.length) {
    hero = images[0]
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      {/* anchor tag dengan link memiliki fungsi yang sama.
    anchor tag memiliki props `href`, sedangkan Link menggunakan `to`.
    Link tidak akan melakukan reload page, sedangkan Anchor tag bakal me-reload page
      */}
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  )
}

export default Pet
