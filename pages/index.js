export default function Index() {
  return (
    <>
      <main>
        <h1>HI 👋</h1>
        <p>
          This my internet home, it's pretty bare right now, stuff will get
          added as time goes on.
        </p>
        <p>
          Anyways, I'm building a soundscape manager for (virtual) tabletop role
          playing games. I aim to give the full control to game masters for as
          little effort as possible, no need for people in a control room.
        </p>
      </main>
      <style jsx>{`
        main {
          max-width: 65ch;
          margin: 0 auto;
          background-color: black;
          color: white;
          border-radius: 5px;
          padding: 2ch;
        }

        @media (max-width: 740px) {
          main {
            width: 100%;
            max-width: unset;
          }
        }

        h1 {
          font-family: T-seriesC;
        }

        p {
          font-family: Inter;
        }
      `}</style>

      <style jsx global>{`
        body,
        html {
          height: 100%;
        }

        body {
          background-image: radial-gradient(
            circle at 50% 50%,
            #e08918 0%,
            #bf5b1d 100%
          );

          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
