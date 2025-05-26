import { useState, ChangeEvent } from "react";
import emailjs from "emailjs-com";

interface ErrorType {
  [key: string]: string;
}

const ContactForm: React.FC = () => {
  const [isSending, setIsSending] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [errors, setErrors] = useState<ErrorType>({});

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { target } = event;

    if (!(target instanceof HTMLFormElement)) return;

    const formData = new FormData(target);
    const fieldErrors: ErrorType = {};

    if (!formData.get("user_name")) {
      fieldErrors["user_name"] = "Please enter your name";
    } else if (formData.get("user_name")!.toString().length < 2) {
      fieldErrors["user_name"] = "Name must be at least 2 characters long";
    }

    if (!formData.get("user_email")) {
      fieldErrors["user_email"] = "Please enter your email";
    } else if (
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(
        formData.get("user_email")!.toString()
      )
    ) {
      fieldErrors["user_email"] = "Please enter a valid email address";
    }

    if (!formData.get("message")) {
      fieldErrors["message"] = "Please enter a message";
    }

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setIsSending(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        target,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID ?? ""
      );

      setIsSending(false);
      setIsSuccess(true);
      target.reset();
      setErrors({});
    } catch (error) {
      setIsSending(false);
      setIsError(true);
      console.log("FAILED...", error);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = event.target;
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    setIsSuccess(false);
  };

  return (
    <div className="bg-[#c7cdd6] pt-10 pb-20 max-[767px]:px-4" id="contact">
      <div className="flex items-center justify-center mb-10">
        <hr className="border-gray-500 border-t w-1/12 my-1 mr-4" />
        <h2 className="text-3xl text-center">
          <span className="px-4 uppercase">Contact</span>
        </h2>
        <hr className="border-gray-500 border-t w-1/12 my-1 ml-4" />
      </div>
      <p className="text-center text-gray-700 text-xl mb-8 max-w-xl mx-auto">
        Feel free to reach out! If you have any questions or want to collaborate, don’t hesitate to contact me.
      </p>
      <form
        id="contact-form"
        className="max-w-md mx-auto"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="mb-4">
          <label htmlFor="user_name" className="block text-gray-700 text-lg">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            className={`w-full border border-gray-300 rounded-md p-2 text-lg focus:outline-none ${errors["user_name"] ? "border-red-500" : ""
              }`}
            onChange={handleInputChange}
          />
          {errors["user_name"] && (
            <p className="text-red-500 text-md">{errors["user_name"]}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="user_email" className="block text-gray-700 text-lg">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            className={`w-full border border-gray-300 rounded-md p-2 text-lg focus:outline-none ${errors["user_email"] ? "border-red-500" : ""
              }`}
            onChange={handleInputChange}
          />
          {errors["user_email"] && (
            <p className="text-red-500 text-md">{errors["user_email"]}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-lg">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            className={`w-full border border-gray-300 rounded-md p-2 text-lg focus:outline-none ${errors["message"] ? "border-red-500" : ""
              }`}
            onChange={handleInputChange}
          ></textarea>
          {errors["message"] && (
            <p className="text-red-500 text-md">{errors["message"]}</p>
          )}
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
