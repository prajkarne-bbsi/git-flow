import "../styles/contact.css";

export function Contact() {
  return (
    <>
      <h1>Contact Me</h1>
      <section className="contact">
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name"/>
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </section>
    </>
  )
}