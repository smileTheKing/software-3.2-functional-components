function Card({ children }) {
  return (
    <div className="card">
      <h3>Genre</h3>
      <hr />
      {children}
    </div>
  );
}
export default Card;
