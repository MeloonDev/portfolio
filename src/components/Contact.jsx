import "./Contact.scss";
import { IoMdMail, IoMdPerson } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mdu5gbq",
        "template_pgt3qmq",
        refForm.current,
        "_uLanPuVnzmwx_kr4"
      )
      .then(
        () => {
          alert("Wiadomość wysłana!");
          window.location.reload(false);
        },
        () => {
          alert(
            "Wystąpił błąd podczas wysyłania wiadomości, proszę spróbować ponownie."
          );
        }
      );
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-info">
        <div className="info">
          <div className="line"></div>
          <IoMdPerson className="icon" />
          <p>Mateusz Melaniuk</p>
        </div>
        <div className="info">
          <div className="line"></div>
          <IoMdMail className="icon" />
          <p>mateusz.melaniuk98@gmail.com</p>
        </div>
        <div className="info">
          <div className="line"></div>
          <IoLocation className="icon" />
          <p>Warszawa, Praga Południe</p>
        </div>
      </div>
      <div className="contact-form">
        <form ref={refForm} onSubmit={sendEmail}>
          <ul>
            <li className="half">
              <input type="text" name="name" placeholder="Imię*" required />
              <input type="email" name="email" placeholder="E-mail*" required />
            </li>

            <li>
              <input
                type="text"
                name="subject"
                placeholder="Temat wiadomości*"
                required
              />
            </li>
            <li>
              <textarea
                name="message"
                placeholder="Wiadomość*"
                required
              ></textarea>
            </li>
            <li className="liBtn">
              <input type="submit" className="btn" value="Wyślij" />
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};
export default Contact;
