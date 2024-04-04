import './BasicForm.css';
import { useForm } from 'react-hook-form';

const BasicForm = () => {
  const {handleSubmit, register, formState} =useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = (values)=>{
    console.log(values)
  }

  return (
    <form className='basicform' onSubmit={handleSubmit(onSubmit)}>
      <label className="labelname" htmlFor="name">Nombre de usuario:</label>
      <input 
      	{...register("name", {
					required: {
						value: true,
						message: "El campo es requerido",
					},
					minLength: {
						value: 3,
						message: "El campo debe tener al menos 3 caracteres",
					},
				})} 
          type="text" 
          id="name" 
          className="name"/>
          {formState.errors.name ? (
            <p>{formState.errors.name.message}</p>
          ) : null} 

          <label className="labelemail" htmlFor="email">Email:</label>
          <input 
            {...register("email", {
              required: {
                value: true,
                message: "El campo es requerido",
              },
             pattern:{
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Por favor, introduce una dirección de correo electrónico válida",
              }
             }
            })}   
            type="email" 
            id="email" 
            className="password"/>
             {formState.errors.email ? (
            <p>{formState.errors.email.message}</p>
          ) : null} 
          
          <label className="labelpassword"  htmlFor="password">Contraseña:</label>
          <input 
            {...register("password", {
              required: {
                value: true,
                message: "La contraseña es requerida",
              },
              minLength: {
                value: 8,
                message: "La contraseña debe tener al menos 8 caracteres",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message: "La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial",
              }
        })} 
          type="password" 
            id="password"
            className="password" />
             {formState.errors.password ? (
            <p>{formState.errors.password.message}</p>
          ) : null}
          <button disabled={!formState.isDirty} type="submit">ENVIAR</button>
    </form>
  );
};

export default BasicForm;