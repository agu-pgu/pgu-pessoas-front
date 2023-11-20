import "./NavbarHome.scss";
import Govbr from "../../assets/imgs/Govbr.png";
// import { logoutUser } from "../../services/calls";
import { useNavigate } from "react-router-dom";
// import { logoutUserError } from "../../assets/js/alertMessages";

const NavbarHome = () => {
  const navigate = useNavigate();

  // const handleSubmit = () => {
  //   logoutUser().then((res) => {
  //     if (res === 200) {
  //       return navigate("/");
  //     } else {
  //       logoutUserError();
  //     }
  //   });
  // };

  return (
    <nav className="navbar">
      <div className="menu-name">
        <img
          className="img-govbr"
          src={Govbr}
          alt="Gov.br"
          style={{ width: "100px", height: "40px", marginRight: "1rem" }}
        />
        <div>
          <span className="menu-name-span-gov">Governo Federal</span>
          <h3 className="menu-name-h3">
            <span className="menu-name-span">PGU</span>-Pessoas
          </h3>
        </div>
      </div>
      <div className="menu">
        <div className="menu-logout">
          <button className="menu-logout-button">
            sair
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHome;
