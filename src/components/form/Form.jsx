import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useForm, ValidationError } from '@formspree/react';
import './form.css';

function Form() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  const [state, handleSubmit] = useForm('mdobnqkd');
  if (state.succeeded) {
    return (
      <div data-aos="zoom-in" className="gpt3__form">
        <div className="gpt3__form-heading">
          <h1 className="gradient__text">Thanks for reaching out to us!</h1>;
        </div>{' '}
      </div>
    );
  }
  return (
    <div data-aos="zoom-in" className="gpt3__form">
      <div className="gpt3__form-heading">
        <h1 className="gradient__text">Get in touch with Gefyra</h1>{' '}
      </div>
      <form onSubmit={handleSubmit}>
        {' '}
        <div className="gpt3__form_element">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="youremail@mail.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />{' '}
        </div>
        <div className="gpt3__form_element">
          <textarea
            rows="5"
            cols="50"
            id="message"
            name="message"
            placeholder="your message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div className="gpt3__form_button">
          <button
            className="gpt3__form-btn"
            type="submit"
            disabled={state.submitting}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default Form;
