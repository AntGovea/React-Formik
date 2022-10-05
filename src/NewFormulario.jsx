import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import "./App.css";

function NewFormulario() {
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
          <Form onSubmit={handleSubmit} className="formulario">
            {/* {console.log(errors)} */}
            <div>
              <label htmlFor="nombre">Nombre</label>
              <Field
                type="text"
                name="nombre"
                placeholder="Nombre"
                id="nombre"
                value={values.nombre}
              />
              {/* {console.log(touched)} */}
              <ErrorMessage
                name="nombre"
                component={() => <div className="error">{errors.nombre}</div>}
              />
            </div>

            <div>
              <label htmlFor="correo">Correo</label>
              <Field
                type="text"
                name="correo"
                placeholder="Correo"
                id="correo"
                value={values.correo}
              />
              <ErrorMessage
                name="correo"
                component={() => <div className="error">{errors.correo}</div>}
              />
            </div>
            <div>
              {/*Etiqueta select */}
              <Field name="pais" as="select">
                <option value="Mexico">Mexico</option>
                <option value={"Estados Unidos"}>Estados Unidos</option>
                <option value={"Canada"}>Canada</option>
              </Field>
            </div>

            <div>
              <label>
                <Field type="radio" name="sexo" value="hombre" />
                Hombre
              </label>
              <label>
                <Field type="radio" name="sexo" value="mujer" />
                Mujer
              </label>
            </div>
            <div>
              <Field as="textarea" name="mensaje" placeholder="Mensaje" />
            </div>

            <button type="submit">Enviar</button>
            {formularioEnviado && (
              <p className="exito">Formulario enviado con exito</p>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
}

export default NewFormulario;
