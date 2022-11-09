import { Scene } from "./components/scene";

function App() {
  return (
    <main>
      <Scene />
      <footer>
        <div>
          <strong> React | Three.js loader component</strong>
        </div>
        <div>
          Inspired by this{" "}
          <a href={"https://codepen.io/ilovepixel/pen/OMKRBG"} target="_blank">
            Javascript animation
          </a>
        </div>
        <div>{`Made with <3 by Sebastien`} </div>
        <div>
          Get in touch ?{" "}
          <a href="https://twitter.com/Console_buche" target="_blank">
            Twitter
          </a>{" "}
          <a
            href="https://www.youtube.com/channel/UCxD5q70zyfmBBp_WcqVUuhA"
            target="_blank"
          >
            {" "}
            | YouTube
          </a>{" "}
        </div>
      </footer>
    </main>
  );
}

export default App;
