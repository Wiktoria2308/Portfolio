import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm: React.FC = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSending(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      const { target } = event;
      if (!(target instanceof HTMLFormElement)) return;

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        target,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID ?? ""
      );

      setIsSending(false);
      setIsSuccess(true);
      target.reset();
    } catch (error) {
      setIsSending(false);
      setIsError(true);
      console.log("FAILED...", error);
    }
  };

  return (
    <div className="bg-[#c7cdd6] pt-10 pb-20">
      <div className="flex items-center justify-center mb-10">
        <hr className="border-gray-500 border-t w-1/12 my-1 mr-4" />
        <h2 className="text-3xl text-center">
          <span className="px-4 uppercase">Contact</span>
        </h2>
        <hr className="border-gray-500 border-t w-1/12 my-1 ml-4" />
      </div>
      <form
        id="contact-form"
        className="max-w-md mx-auto"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="contact_number" />
        <div className="mb-4">
          <label htmlFor="user_name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            className="w-full border border-gray-300 rounded-md p-2 text-lg focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="user_email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            className="w-full border border-gray-300 rounded-md p-2 text-lg focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            className="w-full border border-gray-300 rounded-md p-2 text-lg focus:outline-none"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-8 py-1 rounded-md email-button text-lg"
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send"}
          </button>
        </div>

        <div className="text-right mt-2 text-lg">
          {isSuccess && <p>Email sent successfully!</p>}
          {isError && (
            <p>
              Failed to send email. Please try again or contact me at{" "}
              <a href="mailto:23wiktoria08@gmail.com" className="underline">
                23wiktoria08@gmail.com
              </a>
              .
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
