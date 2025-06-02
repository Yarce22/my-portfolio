"use client"
import { useState } from "react"
import Button from "../Button";

interface FormProps {
  name: string;
  email: string;
  message: string;
  buttonText: string;
}

const Form: React.FC<FormProps> = ({ name, email, message, buttonText }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Enviando...');

    try {
      const response = await fetch('/api/contact', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('¡Mensaje enviado con éxito!');
        setFormData({ name: '', email: '', message: '' }); 
      } else {
        setStatus(`Error al enviar el mensaje: ${result.error || 'Error desconocido'}`);
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setStatus('Error al enviar el mensaje. Inténtalo de nuevo.');
    }
  };

  return (
    <form
      className="w-[80%] lg:w-1/2 flex flex-col items-center gap-3 px-6 py-8 bg-linear-to-br from-Titles to-green-950 rounded-2xl"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder={name}
        className="w-full h-12 px-5 text-Text font-Geist bg-Background rounded-xl"
        required
      />
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder={email}
        className="w-full h-12 px-5 text-Text font-Geist bg-Background rounded-xl"
        required
      />
      <textarea
        name="message"
        id="message"
        value={formData.message}
        onChange={handleChange}
        placeholder={message}
        className="w-full h-24 px-5 py-2 text-Text font-Geist bg-Background rounded-xl"
        required
      />
      <Button>{buttonText}</Button>
      <span className="pb-4 text-Text text-xl text-center font-Geist-Mono font-bold">{status}</span>
    </form>
  )
}

export default Form