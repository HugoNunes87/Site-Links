import './App.css';
import { MonitorPlay } from "phosphor-react";

function App() {
  return (
    <div className="App">
      <img src="https://avatars.githubusercontent.com/u/86809007?v=4" alt="" />
      <h1>Hugo Nunes</h1>
      <p>@HugoNunes87</p>
      <ul>
        <li>
          <a
            href="https://plataforma-de-video.vercel.app/"
            target="_blanck"> <MonitorPlay size={30} color="#2b29a8"/> Plataforma de Video - Portfólio</a>
        </li>
        <li>
          <a
            href=""
            target="_blanck"></a>
        </li>
        <li>
          <a
            href=""
            target="_blanck"></a>
        </li>
        <li>
          <a
            href=""
            target="_blanck"></a>
        </li>
      </ul>
      
      <footer>Feito Por Hugo Nunes</footer>

    </div>
  );
}

export default App;
