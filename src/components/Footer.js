

export default function Footer() {
  return (
      <footer
        className=" text-center text-white"
        style={{ backgroundColor: "grey" }}
      >
        <div className="container p-4 pb-0">
          <section className="">
            <p className="d-flex justify-content-center align-items-center">
              <span className="me-3">Register for free</span>
              <button type="button" className="btn btn-outline-light btn-rounded">
                Sign up!
              </button>
            </p>
          </section>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor:"black"  }}
        >
          © {new Date().getDay()} {new Date().getMonth()} {new Date().getFullYear()} <></>
          Copyright: <></>
          <span className="text-white">Uz Shopping</span>
        </div>
      </footer>
    
  );
}
