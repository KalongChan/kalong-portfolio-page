import {Fragment, useState} from "react";
import * as Yup from "yup";
import {Formik, Form, Field} from "formik";
import emailjs from "@emailjs/browser";
import {useInView} from "react-intersection-observer";

const ContactMe = () => {
  const [sendClicked, setSendClicked] = useState(false);
  const [msgSent, setMsgSent] = useState(false);

  const {ref, inView} = useInView({
    threshold: 0.5,
    initialInView: true,
    triggerOnce: true,
  });

  const formSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Please enter your email address"),
    name: Yup.string().required("Please enter your name"),
    message: Yup.string().required("Please enter your message"),
  });

  const initialValues = {email: "", name: "", message: ""};

  const handleSubmit = (values, resetForm) => {
    setSendClicked(true);
    setTimeout(async () => {
      // mailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', values, 'YOUR_PUBLIC_KEY')
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        values,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setMsgSent(true);
      setSendClicked(false);
      resetForm();
    }, 1000);
  };

  return (
    <Fragment>
      <div className="contact" ref={ref}>
        <div
          className={`contact__title ${inView ? "--loaded" : ""}`}
          style={{transitionDelay: "0ms"}}
        >
          Contact Me
        </div>
        <div
          className={`contact__text ${inView ? "--loaded" : ""}`}
          style={{transitionDelay: "200ms"}}
        >
          Feel free to contact me by completing the form below
        </div>
        <div
          className={`contact__arrow ${inView ? "--loaded" : ""}`}
          style={{transitionDelay: "400ms"}}
        >
          <img src="/img/up.png"></img>
          <img src="/img/up.png"></img>
          <img src="/img/up.png"></img>
        </div>

        <div
          className={`contact__form ${inView ? "--loaded" : ""}`}
          style={{transitionDelay: "600ms"}}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={formSchema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={(values, {resetForm}) => {
              handleSubmit(values, resetForm);
            }}
          >
            {({errors, touched}) => (
              <Form>
                <div className="contact__form-row">
                  <div className="contact__form-item">
                    <div className="contact__form-error">
                      {errors.name && touched.name ? errors.name : ""}
                    </div>
                    <Field
                      name="name"
                      id="name"
                      className="contact__form-input"
                      required
                      form="novalidateform"
                    />
                    <label htmlFor="name" className="contact__form-label">
                      Name
                    </label>
                  </div>

                  <div className="contact__form-item">
                    <div className="contact__form-error">
                      {errors.email && touched.email ? errors.email : ""}
                    </div>

                    <Field
                      name="email"
                      id="email"
                      className="contact__form-input"
                      required
                      form="novalidateform"
                    />
                    <label htmlFor="email" className="contact__form-label">
                      Email
                    </label>
                  </div>
                </div>

                <div className="contact__form-row">
                  <div className="contact__form-item">
                    <div className="contact__form-error">
                      {errors.message && touched.message ? errors.message : ""}
                    </div>

                    <Field
                      as="textarea"
                      name="message"
                      id="message"
                      className="contact__form--message"
                      required
                      form="novalidateform"
                    />
                    <label
                      htmlFor="message"
                      className="contact__form-label--message"
                    >
                      Message
                    </label>
                    <div className="contact__form-submitted">
                      {msgSent ? "Form submitted" : ""}
                    </div>
                  </div>
                </div>
                <button
                  disabled={sendClicked}
                  className={`contact__form-btn`}
                  type="submit"
                >
                  {sendClicked ? <span className="loader"></span> : "Submit"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactMe;
