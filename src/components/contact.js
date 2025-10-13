import React, { useState } from 'react';
import { personalInfo } from '../data/projectsData';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Configura tus credenciales de EmailJS
      const result = await emailjs.send(
        'service_ynbc75j', // Reemplaza con tu Service ID
        'template_viabzkq', // Reemplaza con tu Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: personalInfo.name,
          reply_to: formData.email,
        },
        'MiqfS_555r2i-3k8a' // Reemplaza con tu Public Key
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <p className="section-subtitle">
          ¿Tienes un proyecto en mente? Hablemos y hagámoslo realidad
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>¡Hablemos!</h3>
            <p>
              Estoy siempre abierto a discutir nuevos proyectos, ideas creativas 
              u oportunidades para ser parte de tu visión.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <strong>📧 Email:</strong>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
              <div className="contact-item">
                <strong>📍 Ubicación:</strong>
                <span>{personalInfo.location}</span>
              </div>
              <div className="contact-item">
                <strong>💼 Disponibilidad:</strong>
                <span>Freelance & Proyectos</span>
              </div>
            </div>

            {/* Mensajes de estado */}
            {submitStatus === 'success' && (
              <div className="alert alert-success">
                ✅ ¡Mensaje enviado! Te contactaré pronto.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="alert alert-error">
                ❌ Error al enviar el mensaje. Por favor, intenta nuevamente.
              </div>
            )}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Tu nombre completo"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="tu.email@ejemplo.com"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Asunto del mensaje"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Describe tu proyecto o consulta..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className={`btn btn-primary ${isSubmitting ? 'loading' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Enviando...
                </>
              ) : (
                'Enviar Mensaje'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;