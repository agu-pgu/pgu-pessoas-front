import Swal from "sweetalert2";

export const loginUserError = () => {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Falha no login e/ou senha!",
      showConfirmButton: false,
      timer: 8000,
    });
  };
  
  export const loginServerError = () => {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Falha no servidor!",
      showConfirmButton: false,
      timer: 8000,
    });
  };

  export const ErrorAtGetData = () => {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Falha ao buscar dados para seleção!",
      showConfirmButton: false,
      timer: 8000,
    });
  };