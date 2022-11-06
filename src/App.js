import './App.css';
import { DiscordLogo, GithubLogo, LinkedinLogo, MonitorPlay } from "phosphor-react";

function App() {
  return (
    <div className="container">
      <img src="https://avatars.githubusercontent.com/u/86809007?v=4" alt="" />
      <h1>Hugo Nunes</h1>
      <p className='username'>@HugoNunes87</p>
      <ul>
        <li>
          <a
            href="https://plataforma-de-video.vercel.app/"
            target="_blanck"> <MonitorPlay size={30} color="#e1e1e6"/> Plataforma de Video - Portfólio</a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/hugo-nunes-323a41164/"
            target="_blanck"><LinkedinLogo size={30} color="#e1e1e6"/>LinkeIn</a>
        </li>
        <li>
          <a
            href="https://github.com/HugoNunes87"
            target="_blanck"><GithubLogo size={30} color="#e1e1e6"/>GitHub</a>
        </li>
        <li>
          <a
            href="https://discord.com/"
            target="_blanck"><DiscordLogo size={30} color="#e1e1e6"/>Discord</a>
        </li>
      </ul>
      
      <footer>Feito Por Hugo Nunes</footer>

    </div>
  );
}

export default App;
