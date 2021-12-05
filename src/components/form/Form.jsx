// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';

import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm('mdobnqkd');
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form method="POST" onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
        <input id="email" type="email" name="email" />
      </label>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <div
        className="g-recaptcha"
        data-sitekey="6LeWpnwdAAAAADH7xIEYazCcLY1Yyf-sQ9IpqdX-"
      />

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
