export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f6f0ff",
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        maxWidth: "400px",
        textAlign: "center"
      }}>
        <h1 style={{ color: "#7E5BEF" }}>
          Panic Reset 💜
        </h1>

        <p style={{ marginTop: "10px" }}>
          When your mind starts spiraling, start here.
        </p>

        <button style={{
          marginTop: "20px",
          background: "#7E5BEF",
          color: "white",
          border: "none",
          padding: "12px 20px",
          borderRadius: "10px",
          cursor: "pointer"
        }}>
          Start Your Reset
        </button>
      </div>
    </main>
  );
}
