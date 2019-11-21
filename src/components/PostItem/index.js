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
  <a className="fnt-white" href={`/guide/${id}`}>
    <div
      id={id}
      className="postItem d-flex flex-column flex-sm-row border border-white my-3"
      onClick={onClick}
    >
      <style jsx>{`
      .postItem{
        min-height 10.75rem;
      }
      .post-item-img{
        height: 8.25rem
      }
    `}</style>
      <div className=" h-100 border-sm-right border-white d-flex flex-column justify-content-center">
        <img
          className="post-item-img mx-auto p-2"
          src={photoURL}
          alt="User Profile Picture"
        />
      </div>
      <div className="pl-4 pt-2 pl-sm-0 border-top border-sm-top-0 d-flex flex-column justify-content-center">
        <h6> {title} </h6>
        <p>{description}</p>

        <p>{date}</p>
        <p>{category}</p>
      </div>
    </div>
  </a>
);
