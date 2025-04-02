function Carousel() {
  return (
    <div id="f1Carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#f1Carousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button type="button" data-bs-target="#f1Carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#f1Carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#f1Carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>

      <div className="carousel-inner rounded shadow">
        <div className="carousel-item active">
          <img
            src="https://static.wixstatic.com/media/237dde_b20cdf08ce9f459784b30cecaa950a91~mv2.jpg/v1/fill/w_568,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/237dde_b20cdf08ce9f459784b30cecaa950a91~mv2.jpg"
            className="d-block w-100"
            alt="Formula 1 Pilotos"
            style={{ height: "400px", objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h2>Formula 1 temporada 2024</h2>
            <p>Experimienta el vije de la temporada 2024 de formula 1</p> x
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKI1GUgHNAjkq4hK_89vyHjvPfYMohEFJJNw&s"
            className="d-block w-100"
            alt="Top Teams"
            style={{ height: "400px", objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h2>Top Teams</h2>
            <p>los mejores equipos temporada 2024 </p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/calendar-2024-64a81a3d98a91.jpeg?crop=1xw:0.6xh;center,top&resize=1200:*"
            className="d-block w-100"
            alt="Race Calendar"
            style={{ height: "400px", objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h2>Race Calendar</h2>
            <p>El calendario de las carrelas de temporada 2024</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="https://cdn-5.motorsport.com/images/amp/2QzVxMPY/s6/max-verstappen-red-bull-racing.jpg"
            className="d-block w-100"
            alt="F1 Drivers"
            style={{ height: "400px", objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h2>Ganador temporada 2024</h2>
            <p>Max Verstappen </p>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#f1Carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#f1Carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel

