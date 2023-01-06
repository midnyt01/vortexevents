import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Zoom from "react-reveal/Zoom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./contact.styles.css";

const DEFAULT_FORM_FIELDS = {
    user_name: '',
    user_email:'',
    user_subject: '',
    message: ''
}


const ContactPage = () => {
  const form = useRef();
  const [formFields, setFormFields] = useState(DEFAULT_FORM_FIELDS)
  const [result, setResult] = useState('')

  const {user_name, user_email, user_subject, message} = formFields

  const onChangeHandler = (e) => {
    const {name, value} = e.target
    setFormFields({...formFields, [name]: value})
  }

  const resetFormFields = () =>{
    setFormFields(DEFAULT_FORM_FIELDS)
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ik0bf3s",
        "template_4jjiclo",
        form.current,
        "OaXk23x-u6oSwgKtm"
      )
      .then(
        (result) => {
          console.log(result.text);
          resetFormFields()
          if (result.text === 'OK') {
            setResult('success')
          }
        },
        (error) => {
          console.log(error.text);
          setResult('error')
        }
      );
  };

  return (
    <div style={{position:'relative'}}>
        <p className={`${(result === 'success') ? 'success' : ''}`} style={{position: 'absolute', right: `${(result === 'success') ? '50px' : '-500px'}`}} >
          Message Send Successfully
        </p>
        <p className={`${(result === 'error') ? 'error' : ''}`} style={{position: 'absolute', right: `${(result === 'error') ? '50px' : '-500px'}`}} >
        Something went wrong. Try again later
        </p>
      <section className="mt-4 mb-4">
        <div className="container-fluid m-auto">
          <Zoom>
            <div className="contact_inner pink-bg">
              <div className="contact_field">
                <form ref={form} onSubmit={sendEmail}>
                  <input
                    type="text"
                    name="user_name"
                    value={user_name}
                    className="form-control form-group"
                    placeholder="Enter your full name"
                    onChange={onChangeHandler}
                  />
                  <input
                    type="email"
                    name="user_email"
                    value={user_email}
                    className="form-control form-group"
                    placeholder="Enter your email"
                    onChange={onChangeHandler}
                  />
                  <input
                    type="text"
                    name="user_subject"
                    value={user_subject}
                    className="form-control form-group"
                    placeholder="Enter your subject"
                    onChange={onChangeHandler}
                  />
                  <textarea
                    name="message"
                    value={message}
                    className="form-control form-group"
                    placeholder="Enter your message"
                    onChange={onChangeHandler}
                  />
                  <button
                    className="contact_form_submit"
                    variant="primary"
                    type="submit"
                    value="Send"
                  >
                    Submit
                  </button>
                  {/* <button
                    type="submit"
                    value="Send"
                  /> */}
                </form>
                {/* <form onSubmit={sendEmail}>
                                <div controlId="name">
                                <input
                                    className='form-control form-group'
                                    type="text"
                                    name="name"
                                    value={state.name}
                                    placeholder="Enter your full name"
                                    onChange={onInputChange}
                                />
                                </div>
                                <div controlId="email">
                                <input
                                    className='form-control form-group'
                                    type="text"
                                    name="email"
                                    value={state.email}
                                    placeholder="Enter your email"
                                    onChange={onInputChange}
                                />
                                </div>
                                <div controlId="subject">
                                <input
                                    className='form-control form-group'
                                    type="text"
                                    name="subject"
                                    value={state.subject}
                                    placeholder="Enter subject"
                                    onChange={onInputChange}
                                />
                                </div>
                                <div controlId="subject">
                                <input
                                    className='form-control form-group'
                                    as="textarea"
                                    name="message"
                                    value={state.message}
                                    rows="3"
                                    placeholder="Enter your message"
                                    onChange={onInputChange}
                                />
                                </div>
                                <button 
                                    className='contact_form_submit' 
                                    variant="primary" 
                                    type="submit">Submit
                                </button>
                            </form> */}
              </div>

              <div className="mt-2">
                <div className="right_conatct_social_icon d-flex align-items-end">
                  <div className="socil_item_inner d-flex">
                    <li>
                      <Link src="#">
                        <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                      </Link>
                    </li>
                    <li>
                      <Link src="#">
                        <FontAwesomeIcon icon="fa-brands fa-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link src="#">
                        <FontAwesomeIcon icon="fa-brands fa-twitter" />
                      </Link>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
