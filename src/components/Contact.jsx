import "./Contact.scss";
import { IoMdMail, IoMdPerson } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
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

  const boxVariantLeft = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    hidden: { opacity: 0, x: -300 },
  };

  const boxVariantRight = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    hidden: { opacity: 0, x: 400 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div className="contact-container" id="contact">
      <motion.div
        ref={ref}
        variants={boxVariantLeft}
        initial="hidden"
        animate={control}
        className="contact-info"
      >
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
      </motion.div>
      <motion.div
        ref={ref}
        variants={boxVariantRight}
        initial="hidden"
        animate={control}
        className="contact-form"
      >
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
      </motion.div>
    </div>
  );
};
export default Contact;
