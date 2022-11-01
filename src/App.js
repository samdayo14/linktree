import "./App.css";

// IMAGES
import prof_img from "./images/profile__img.jpg";
import slack_img from "./images/slack.png";
import icon_img from "./images/Icon.png";
import zuri_img from "./images/Zuri.Internship_Logo (1).png";
import I4G_img from "./images/I4G (1).png";

function App() {
  return (
    <div className="App">
      <img src={prof_img} alt="profile-img" />
      <p className="text">Annette Black</p>
      <ul className="links">
        <li className="link">
          <a href="https://twitter.com/Adenira97675031" target="_blank">
            Twitter Link
          </a>
        </li>
        <li className="link">
          <a href="#">Zuri Team</a>
        </li>
        <li className="link">
          <a href="#">Zuri Books</a>
        </li>
        <li className="link">
          <a href="#">Python Books</a>
        </li>
        <li className="link">
          <a href="#">Background check for coders</a>
        </li>
        <li className="link">
          <a href="#">Design Books</a>
        </li>
      </ul>

      <div className="images">
        <img src={slack_img} alt="slack-img" />
        <img src={icon_img} alt="github=img" />
      </div>

      <footer className="footer">
        <img src={zuri_img} alt="zuri-logo" />
        <p className="footer-text">HNG internship 9 Frontend Task</p>
        <img className="footer-img" src={I4G_img} alt="I4G-img" />
      </footer>
    </div>
  );
}

export default App;
