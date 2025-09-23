  function StarRating({ value = 0, size = "1.1rem", className = "" }) {
  // numero di stelle piene
  const full = Math.floor(value);
  // una mezza stella se la frazione è >= 0.5
  const half = value - full >= 0.5;
  // il resto sono stelle vuote
  const empty = 5 - full - (half ? 1 : 0);

  const style = { fontSize: size, lineHeight: 1 };

  return (
    <span
      className={`star-rating ${className}`.trim()}
      aria-label={`Valutazione media ${value}/5`}
      role="img"
      style={{ display: "inline-flex", gap: "0.25rem" }}
    >
      {/* stelle piene */}
      {Array.from({ length: full }).map((_, i) => (
        <i key={`f-${i}`} className="fa-solid fa-star" style={style} />
      ))}
      {/* mezza stella */}
      {half && <i className="fa-solid fa-star-half-stroke" style={style} />}
      {/* stelle vuote */}
      {Array.from({ length: empty }).map((_, i) => (
        <i key={`e-${i}`} className="fa-regular fa-star" style={style} />
      ))}
    </span>
  );
};
export default StarRating;