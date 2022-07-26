import { React, useState } from "react";
import GitHub from "../../assets/github.svg";
import LinkedIn from "../../assets/linkedin.svg";
import axios from "axios";
import Modal from "../modals/Modal.jsx";
import "../../assets/contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [submitSuccessful, setSubmitSuccessful] = useState(false);
  const [submitFailed, setSubmitFailed] = useState(false);
  const [modalFadeOut, setModalFadeOut] = useState(false);

  const sendEmail = (subject, body) => {
    const endpoint =
      "https://rosuwl2qmr3lddcwrxigiwxpv40zsrul.lambda-url.us-east-1.on.aws/";

    axios
      .post(endpoint, {
        subject: subject,
        body: body,
      })
      .then(() => {
        setSubmitFailed(false);
        setSubmitSuccessful(true);
        setModalFadeOut(true);
        setTimeout(() => {
          setShowModal(false);
          setSubmitSuccessful(false);
          setModalFadeOut(false);
        }, 4000);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !note) {
      setSubmitFailed(true);
      setShowModal(true);
      setTimeout(() => {
        setModalFadeOut(true);
        setTimeout(() => {
          setShowModal(false);
          setModalFadeOut(false);
          setSubmitFailed(false);
        }, 2000);
      }, 1500);
      return;
    }
    setShowModal(true);
    sendEmail("Inquiry from " + name, "Email: " + email + "\n\n" + note);
    setName("");
    setEmail("");
    setNote("");
  };

  return (
    <div className="contactContainer">
      <form
        className={
          showModal
            ? modalFadeOut
              ? "formContainer formFadeIn"
              : "formContainer formFadeOut"
            : "formContainer formFadeIn"
        }
        onSubmit={handleSubmit}
      >
        <div style={{ alignSelf: "flex-start" }}>
          <a
            href="https://github.com/joshkotrous"
            rel="noreferrer"
            target="_blank"
          >
            <img src={GitHub} className="contactIcon" />
          </a>
          <a
            href="https://www.linkedin.com/in/joshkotrous/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={LinkedIn} className="contactIcon" />
          </a>
        </div>
        <input
          className="emailInput"
          type="text"
          name="name"
          placeholder="name"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <div className="separator"></div>
        <input
          className="emailInput"
          type="email"
          name="email"
          placeholder="email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <div className="separator"></div>
        <textarea
          className="textInput"
          type="text"
          name="note"
          placeholder="leave a note"
          onChange={(event) => setNote(event.target.value)}
          value={note}
        />

        <button className="submitButton" type="submit" value="submit">
          submit
        </button>
      </form>
      {showModal ? (
        <div style={{ position: "absolute", width: "100%" }}>
          <div className="overlayContainer">
            <Modal
              loadingMessage="Sending message..."
              successMessage="Successfully sent message."
              failedMessage="All fields must be populated."
              showCheckBox={submitSuccessful}
              showFailed={submitFailed}
              fadeOut={modalFadeOut}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Contact;
