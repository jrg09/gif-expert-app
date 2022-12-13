export const GifItem = ({ id, title, image }) => {
  return (
    <>
      <div className="card" style={{ width: "10rem" }}>
        <img src={image} alt={title} />
        <p className="small">{title}</p>
      </div>
    </>
  );
};
