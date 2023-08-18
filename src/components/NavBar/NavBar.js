import "./NavBar.css";
import Logo from'./../../images/logo.png'
const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <div className="row w-100">
            <div className="col">
              <a class="navbar-brand" href="#">
                <img src={Logo}class="me-2" alt="MDB Logo" />
                <small className="logo-text fs-1">Flashtype</small>
              </a>
            </div>
            <div className="col">
              <div className="float-end">
                <a
                  href="https://github.com/bhoomipanchal1821/flashtype.git"
                  target="_blank"
                  rel="noreferrer"
                
                  className="fs-2 mt-2 me-2"
                >
                  GIT
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
