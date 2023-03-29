import { FormProvider, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import InputField from "./InputField";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const methods = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

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
  console.log(errors);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(sendEmail)}
        className="grid grid-cols-2 grid-rows-5 sm:grid-rows-4 gap-2 mx-4"
      >
        <InputField
          registerName="name"
          id="name"
          type="text"
          placeholder="Name"
          isRequired
          errMessage="Please enter your Name"
          hasSpanTwo={false}
        />
        <InputField
          registerName="email"
          id="email"
          type="text"
          placeholder="Email"
          isRequired
          errMessage="Please enter your Email"
          hasSpanTwo={false}
        />
        <InputField
          registerName="subject"
          id="subject"
          type="text"
          placeholder="Subject"
          isRequired
          errMessage="Put in subject"
          hasSpanTwo
        />
        <textarea
          {...register("message")}
          placeholder="Message"
          className="customInput col-span-2"
        />
        <button className="col-span-2 border rounded-sm bg-customDarkGray/70">
          Submit
        </button>
      </form>
    </FormProvider>
  );
};

export default ContactForm;
