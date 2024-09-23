function Home() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        margin: "0",
        padding: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        background: "linear-gradient(to right, #ff7e5f, #feb47b)",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "2.5em", margin: "0.5em 0" }}>
        Vença as Muralhas
      </h1>
      <p style={{ fontSize: "1.2em", margin: "0.5em 0" }}>
        Com fé e determinação, você pode superar qualquer obstáculo que surgir
        em seu caminho. Acredite em si mesmo e nunca desista, pois as muralhas
        que enfrentamos são oportunidades para crescermos e nos tornarmos mais
        fortes.
      </p>
      <p style={{ fontSize: "2em", fontWeight: "bold", marginTop: "1em" }}>
        JESUS TE AMA!!! E EU TBM!!!
      </p>
      <p style={{ fontSize: "1.2em", marginTop: "1em", fontStyle: "italic" }}>
        "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito,
        para que todo aquele que nele crê não pereça, mas tenha a vida eterna."
        - João 3:16
      </p>
    </div>
  );
}

export default Home;
