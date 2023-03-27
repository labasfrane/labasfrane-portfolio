import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const sendEmail = async (formData: any) => {
    await emailjs
      .send("service_liv25q1", "contact_form", formData, "M4VvBRl45mlE2Gg0w")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(sendEmail)}
      className="grid grid-cols-2 grid-rows-5 sm:grid-rows-4 gap-2 mx-4"
    >
      <input
        {...register("name")}
        placeholder="Name"
        className="customInput col-span-2 sm:col-span-1"
        type="text"
      />
      <input
        {...register("email")}
        placeholder="Email "
        className="customInput col-span-2 sm:col-span-1"
        type="text"
      />

      <input
        {...register("subject")}
        placeholder="Subject"
        className="customInput col-span-2"
        type="text"
      />

      <textarea
        {...register("message")}
        placeholder="Message"
        className="customInput col-span-2"
      />
      <button className="col-span-2">Submit</button>
    </form>
  );
};

export default ContactForm;
