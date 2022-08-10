const Divider = ({ width = 50 }) => {
  return (
    <div
      style={{
        width,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span
        style={{
          borderRadius: "5px",
          width: "2px",
          height: "90%",
          backgroundColor: "#C2C2C2",
        }}
      ></span>
    </div>
  );
};
export default Divider;
