import reactLogo from "../logo.svg";

export const ReactLogo = () => {
  return (
    <img
      src={reactLogo}
      alt="React logo"
      style={{
        bottom: "20px",
        position: "fixed",
        right: "20px",
        width: "130px"
      }}
    ></img>
  );
};
