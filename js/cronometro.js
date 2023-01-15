function relogio() {
  function getTimeSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  const relogio = document.querySelector(".relogio");
  const iniciar = document.querySelector(".iniciar");
  const parar = document.querySelector(".parar");
  const zerar = document.querySelector(".zerar");

  let segundos = 0;
  let timer;

  function ClockStarter() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = getTimeSeconds(segundos);
    }, 1000);
  }

  document.addEventListener("click", function (e) {
    const el = e.target;

    if (el.classList.contains("zerar")) {
      clearInterval(timer);
      relogio.innerHTML = "00:00:00";
      relogio.classList.remove("pausado");
      segundos = 0;
    }

    if (el.classList.contains("iniciar")) {
      relogio.classList.remove("pausado");
      clearInterval(timer);
      iniciar.innerHTML = "Iniciar";
      ClockStarter();
    }
    if (el.classList.contains("parar")) {
      clearInterval(timer);
      relogio.classList.add("pausado");
      iniciar.innerHTML = "Continuar";
    }
  });
}

relogio();
