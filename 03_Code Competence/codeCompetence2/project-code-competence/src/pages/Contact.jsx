import FormContact from "../components/Contact/FormContact";

const Contact = () => {
  return (
    <div className="vh-100 container mt-5 w-50 pb-3">
      <div className="headContact text-center p-4">
        <h2>Contact us</h2>
        <p>Need to get in touch? please our door is always open for a good cup of coffee</p>
      </div>
      <FormContact />
    </div>
  );
};

export default Contact;
