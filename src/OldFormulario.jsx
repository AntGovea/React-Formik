import { Formik } from "formik";
import { useState } from "react";
import "./App.css";

function OldFormulario() {
  const [formularioEnviado, setFormularioEnviado] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          correo: "",
        }}
        validate={(valores) => {
          let errores = {};

          if (!valores.nombre) {
            errores.nombre = "*Debes de ingresar un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "*El nombre solo puede contener letras y espacios";
          }

          if (!valores.correo) {
            errores.correo = "*Debes de ingresar un correo";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.correo
            )
          ) {
            errores.correo =
              "*El correo solo puede contener guiones bajo, espacios y letras";
          }

          return errores;
        }}
        onSubmit={(valores) => {
          // console.log("enviar formulario desdel el submit");
          // console.log("valores");
          // console.log(valores);
          setFormularioEnviado(true);
          setTimeout(() => setFormularioEnviado(false), 5000);
          resetForm();
        }}
      >
        {({
          errors,
          handleSubmit,
          values,
          handleChange,
          handleBlur,
          touched,
          resetForm,
        }) => (
          <form onSubmit={handleSubmit} className="formulario">
            {/* {console.log(errors)} */}
            <div>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                id="nombre"
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {/* {console.log(touched)} */}
              {touched.nombre && errors.nombre && (
                <div className="error">{errors.nombre}</div>
              )}
            </div>

            <div>
              <label htmlFor="correo">Correo</label>
              <input
                type="text"
                name="correo"
                placeholder="Correo"
                id="correo"
                value={values.correo}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.correo && errors.correo && (
                <div className="error">{errors.correo}</div>
              )}
            </div>

            <button type="submit">Enviar</button>
            {formularioEnviado && (
              <p className="exito">Formulario enviado con exito</p>
            )}
          </form>
        )}
      </Formik>
    </>
  );
}

export default OldFormulario;
