import Link from "next/link";

const ContactMe = () => {
  return (
    <div className="contact">
      <div className="contact__title">Contact Me</div>
      <div className="contact__text">
        Feel free to contact me by clicking the button below
      </div>
      <div className="contact__arrow">
        <img src="/img/up.png"></img>
        <img src="/img/up.png"></img>
        <img src="/img/up.png"></img>
      </div>

      <div className="contact__btn">
        <Link href="mailto:kalongchan1113@gmail.com">Click Me</Link>
      </div>
    </div>
  );
};

export default ContactMe;
