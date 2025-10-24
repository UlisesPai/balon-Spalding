console.log("✅ JavaScript cargado correctamente");

document.addEventListener("DOMContentLoaded", () => {
  const selectorModo = document.getElementById("modo-tema"); 

  const modoGuardado = localStorage.getItem("modo");

  if (modoGuardado === "oscuro") {
    document.body.classList.add("modo-oscuro");
    selectorModo.value = "oscuro";
  } else {
    document.body.classList.remove("modo-oscuro");
    selectorModo.value = "claro";
  }


  selectorModo.addEventListener("change", (e) => {
    if (e.target.value === "oscuro") {
      document.body.classList.add("modo-oscuro");
      localStorage.setItem("modo", "oscuro");
    } else {
      document.body.classList.remove("modo-oscuro");
      localStorage.setItem("modo", "claro");
    }
  });
});
