const validar_email = (email) => {
  const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email) ? true : false;
};

const validarForm = () => {
  const nombre = document.querySelector("#nombre").value;
  const email = document.querySelector("#email").value;
  const mensaje = document.querySelector("#mensaje").value;

  if (nombre == '') {
    Swal.fire({
      icon: 'error',
      title: 'Ups...',
      html: 'El campo "<b>Nombre</b>" no puede quedar vacío',
      confirmButtonText: 'Aceptar',
    });
    return false;
  } else if (email == '') {
    Swal.fire({
      icon: 'error',
      title: 'Ups...',
      html: 'El campo "<b>Email</b>" no puede quedar vacío',
      confirmButtonText: 'Aceptar',
    });
    return false;
  } else if (!validar_email(email)) {
    Swal.fire({
      icon: 'error',
      title: 'Ups...',
      text: 'Tu correo no es valido, escribelo correctamene',
      confirmButtonText: 'Aceptar',
    });
    return false;
  } else if (mensaje == '') {
    Swal.fire({
      icon: 'error',
      title: 'Ups...',
      html: 'El campo "<b>Mensaje</b>" no puede quedar vacío',
      confirmButtonText: 'Aceptar',
    });
    return false;
  }
}