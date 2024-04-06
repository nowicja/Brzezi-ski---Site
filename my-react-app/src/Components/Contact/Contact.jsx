import React, { useState } from 'react';
import './Contact.css'
function ContactForm() {
  const [form, setForm] = useState({
    fname: '',
    lname: '',
    email: '',
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
            <div className="contact_form">
                <h1>Skontaktuj się z nami!</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <label>
                        <p>Imię:</p>
                        <input type="text" name="fname" value={form.fname} onChange={handleChange} />
                    </label>
                    <label>
                        <p>Nazwisko:</p>
                        <input type="text" name="lname" value={form.lname} onChange={handleChange} />
                    </label>
                    <label>
                        <p>E-mail</p>:
                        <input type="email" name="email" value={form.email} onChange={handleChange} />
                    </label>
                    <label>
                        <p>Wiadomość</p>:
                        <textarea name="message" value={form.message} onChange={handleChange} />
                    </label>
                    <input type="submit" value="Prześlij" />
                </form>
            </div>
        </div>
    </div>
    
  );
}

export default ContactForm;
