import React, { useState } from 'react';
import './Contact.css'

function ContactForm() {
  const [form, setForm] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Here you would typically send the form data to your server
  };

  return (
    <div>
        <div className="contact">
          <div className="sector">
          <div className="contact_form">
                <p>Skontaktuj się z nami!</p>
                <form className="form" onSubmit={handleSubmit}>
                    <label>
                        <input className='input' placeholder='Imię' type="text" name="fname" value={form.fname} onChange={handleChange} />
                    </label>
                    <label>
                        <input placeholder='Nazwisko' type="text" name="lname" value={form.lname} onChange={handleChange} />
                    </label>
                    <label>
                        <input placeholder='Telefon' type="text" name="phone" value={form.phone} onChange={handleChange} />
                    </label>
                    <label>
                        <input className='input' placeholder='E-mail' type="email" name="email" value={form.email} onChange={handleChange} />
                    </label>
                    <label>
                        <textarea placeholder='Wiadomość' name="message" value={form.message} onChange={handleChange} />
                    </label>
                    <input className='button' type="submit" value="Prześlij" />
                </form>
            </div>
            <div className="location">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d618.4341972320302!2d17.29341096983643!3d51.682960801946166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4705417f57fb8e23%3A0xd005d64b9e0cd323!2sBaszk%C3%B3w%2098%2C%2063-741%20Baszk%C3%B3w!5e0!3m2!1sen!2spl!4v1712684266775!5m2!1sen!2spl" width="600" height="450"></iframe>
            </div>
          </div>
        </div>
    </div>
    
  );
}

export default ContactForm;
