function horarioMatutino() {
    document.getElementById("btn-matutino").className = "btn btn-primary";
    document.getElementById("btn-vespertino").className = "btn btn-secondary mx-2";
    document.getElementById("btn-nocturno").className = "btn btn-secondary";

    document.getElementById("modalBody").innerHTML = `<div class="container-fluid">
    <div id="carouselMatutino" class="carousel slide carousel-fade">
        <div class="carousel-inner">
              <div class="carousel-item active bg-body">
                <img src="src/MatutinoLunes.png" class="d-block w-100" alt="Lunes">
              </div>
            <div class="carousel-item bg-body">
                <img src="src/MatutinoMartes.png" class="d-block w-100" alt="Martes">
            </div>
            <div class="carousel-item bg-body">
                <img src="src/MatutinoMiercoles.png" class="d-block w-100" alt="Miercoles">
            </div>
              <div class="carousel-item bg-body">
                <img src="src/MatutinoJueves.png" class="d-block w-100" alt="Jueves">
              </div>
              <div class="carousel-item bg-body">
                <img src="src/MatutinoViernes.png" class="d-block w-100" alt="Viernes">
              </div>
            <div class="carousel-item bg-body">
                <img src="src/MatutinoSabado.png" class="d-block w-100" alt="Sabado">
              </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselMatutino" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselMatutino" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
    </div>
</div>`
}

function horarioVespertino() {
    document.getElementById("btn-matutino").className = "btn btn-secondary";
    document.getElementById("btn-vespertino").className = "btn btn-primary mx-2";
    document.getElementById("btn-nocturno").className = "btn btn-secondary";

    document.getElementById("modalBody").innerHTML = `<div class="container-fluid">
    <div id="carouselVespertino" class="carousel slide carousel-fade">
        <div class="carousel-inner">
              <div class="carousel-item active bg-body">
                <img src="src/VespertinoLunes.png" class="d-block w-100" alt="Lunes">
              </div>
            <div class="carousel-item bg-body">
                <img src="src/VespertinoMartes.png" class="d-block w-100" alt="Martes">
            </div>
            <div class="carousel-item bg-body">
                <img src="src/VespertinoMiercoles.png" class="d-block w-100" alt="Miercoles">
            </div>
              <div class="carousel-item bg-body">
                <img src="src/VespertinoJueves.png" class="d-block w-100" alt="Jueves">
              </div>
              <div class="carousel-item bg-body">
                <img src="src/VespertinoViernes.png" class="d-block w-100" alt="Viernes">
              </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselVespertino" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselVespertino" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
    </div>
</div>`
}

function horarioNocturno() {
    document.getElementById("btn-matutino").className = "btn btn-secondary";
    document.getElementById("btn-vespertino").className = "btn btn-secondary mx-2";
    document.getElementById("btn-nocturno").className = "btn btn-primary";

    document.getElementById("modalBody").innerHTML = `<div class="container-fluid">
    <div id="carouselNocturno" class="carousel slide carousel-fade">
        <div class="carousel-inner">
              <div class="carousel-item active bg-body">
                <img src="src/NocturnoLunes.png" class="d-block w-100" alt="Lunes">
              </div>
            <div class="carousel-item bg-body">
                <img src="src/NocturnoMartes.png" class="d-block w-100" alt="Martes">
            </div>
            <div class="carousel-item bg-body">
                <img src="src/NocturnoMiercoles.png" class="d-block w-100" alt="Miercoles">
            </div>
              <div class="carousel-item bg-body">
                <img src="src/NocturnoJueves.png" class="d-block w-100" alt="Jueves">
              </div>
              <div class="carousel-item bg-body">
                <img src="src/NocturnoViernes.png" class="d-block w-100" alt="Viernes">
              </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselNocturno" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselNocturno" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
    </div>
</div>`
}