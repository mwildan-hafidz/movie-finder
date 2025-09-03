export default function Wrapper({ children }) {
  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{
        backgroundImage: "linear-gradient(to right, rgb(33, 37, 41), rgba(47, 46, 49, 1))",
      }}>
      {children}
    </div>
  );
}