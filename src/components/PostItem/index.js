export default ({
  id,
  title,
  content,
  description,
  category,
  photoURL,
  date,
  onClick
}) => (
  <a className='fnt-white' href={`/guide/${category}/${id}`}>
  <div
    id={id}
    className="postItem d-flex flex-row border border-white my-3"
    onClick={onClick}
  >
    <style jsx>{`
      .postItem{
        height 10.75rem;
      }
    `}</style>
    <div className="d-flex flex-column justify-content-between h-100">
      <img
        className="h-100 border-right border-white mr-3 p-2"
        src={photoURL}
        alt="User Profile Picture"
      />
    </div>
    <div className="d-flex flex-column justify-content-center">
      <h3> {title} </h3>
      <p>{description}</p>

      <p>{date}</p>
      <p>{category}</p>
    </div>
  </div>

  </a>
);
