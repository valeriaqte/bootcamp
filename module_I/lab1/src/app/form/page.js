"use client";
import { useEffect } from "react";
import { useInputHook } from "@/hooks/useForm"; // Usa el alias configurado

export default function FormPage() {
  // Usamos el hook personalizado para manejar los inputs
  const { value: valueFullName, bind: bindFullName, reset: resetFullName } = useInputHook();
  const { value: valueEmail, bind: bindEmail, reset: resetEmail } = useInputHook();
  const { value: valueUsername, bind: bindUsername, reset: resetUsername } = useInputHook();
  const { value: valuePassword, bind: bindPassword, reset: resetPassword } = useInputHook();

  // Cargar valores del localStorage al montar el componente
  
  useEffect(() => {
    const storedFullName = localStorage.getItem("fullName");
    const storedEmail = localStorage.getItem("email");
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (storedFullName) bindFullName.onChange({ target: { value: storedFullName } });
    if (storedEmail) bindEmail.onChange({ target: { value: storedEmail } });
    if (storedUsername) bindUsername.onChange({ target: { value: storedUsername } });
    if (storedPassword) bindPassword.onChange({ target: { value: storedPassword } });
  }, [bindFullName, bindEmail, bindUsername, bindPassword]);

  // Manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("fullName", valueFullName);
    localStorage.setItem("email", valueEmail);
    localStorage.setItem("username", valueUsername);
    localStorage.setItem("password", valuePassword);
  };

  // Manejar el reset de los campos y localStorage
  const handleReset = () => {
    resetFullName();
    resetEmail();
    resetUsername();
    resetPassword();
    localStorage.removeItem("fullName");
    localStorage.removeItem("email");
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombres y Apellidos:</label>
        <input name="fullName" type="text" {...bindFullName} />

        <label>Email:</label>
        <input name="email" type="email" {...bindEmail} />

        <label>Username:</label>
        <input name="username" type="text" {...bindUsername} />

        <label>Password:</label>
        <input name="password" type="password" {...bindPassword} />

        <input type="submit" value="Enviar" />
        <button type="button" onClick={handleReset}>Reset</button>
      </form>

      <h2>Nombres y Apellidos: {valueFullName}</h2>
      <h2>Email: {valueEmail}</h2>
      <h2>Username: {valueUsername}</h2>
    </div>
  );
}