export default function ScrollButton({
  direction,
  innerRef,
  page,
  setPage,
  topClassName,
  bottomClassName,
}) {
  const handleClick = (e) => {
    if (innerRef.current.classList.contains("fa-arrow-up") && page > 0) {
      setPage(page - 1);
    }
    if (innerRef.current.classList.contains("fa-arrow-down") && page < 2) {
      setPage(page + 1);
    }
  };

  return (
    <div className="scroll-button">
      {direction === "top" ? (
        <i ref={innerRef} className={topClassName} onClick={handleClick}></i>
      ) : (
        <i ref={innerRef} className={bottomClassName} onClick={handleClick}></i>
      )}
    </div>
  );
}
