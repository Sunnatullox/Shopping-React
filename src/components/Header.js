import img from "../img/Village-Toy-Shop_logo_1200x1200.png"
import "./Header.css";

export default function Header() {
  return (
      <div className="headers bg-info header-main border-bottom">
        <div className="container-fluid">
          <div className="row p-2 pt-3 pb-3 d-flex align-items-center">
            <div className="col-9">
              <img style={{width:"25%"}} src={img} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
  );
}
