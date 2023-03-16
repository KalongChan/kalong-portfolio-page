import Link from "next/link";
import {Fragment} from "react";
import * as Yup from "yup";
import {Formik, Form, Field} from "formik";

const ContactMe = () => {
  const formSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Please enter your email address"),
    name: Yup.string().required("Please enter your name"),
    message: Yup.string().required("Please enter your message"),
  });

  const formItems = [
    {type: "email", label: "Email"},
    {type: "name", label: "Your Name"},
    {type: "message", label: "Your Message"},
  ];

  const initialValues = {email: "", name: "", message: ""};

  const handleSubmit = (values) => {
    // e.preventDefault();
    console.log(values);
  };

  return (
    <Fragment>
      <div className="contact__title">Contact Me</div>
      <div className="contact__text">
        Feel free to contact me by clicking the button below
      </div>
      <div className="contact__arrow">
        <img src="/img/up.png"></img>
        <img src="/img/up.png"></img>
        <img src="/img/up.png"></img>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({errors, touched}) => (
          <Form>
            <Field name="name" />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <Field name="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field name="message" as="textarea" />
            {errors.message && touched.message ? (
              <div>{errors.message}</div>
            ) : null}
            <button className="contact__btn" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>

      <div className="contact__btn">
        <Link href="mailto:kalongchan1113@gmail.com">Click Me</Link>
      </div>
    </Fragment>
  );
};

export default ContactMe;
