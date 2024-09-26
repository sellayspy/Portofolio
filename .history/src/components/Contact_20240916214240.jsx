import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="wrapper">
        <h3 style={{ color: "#ffd700" }}>Contact</h3>

        <div className="contact-form">
          <form action="">
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Email" required />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
              required
            ></textarea>
            <input type="submit" value="Send" name="" className="send-btn" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
