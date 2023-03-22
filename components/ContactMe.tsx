import { useForm, SubmitHandler } from "react-hook-form";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData);

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left  max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="sectionHeader">Contact</h3>

      <div className="flex flex-col space-y-5 mt-12">
        <div className="flex items-center space-x-5 justify-center md:justify-start">
          <EnvelopeIcon className="h-7 w-7" />
          <a href="mailto:m.bluth@example.com">labasfrane@gmail.com</a>
        </div>
        <div className="flex items-center space-x-5 justify-center md:justify-start">
          <PhoneIcon className="h-7 w-7" />
          <a href="tel:123-456-7890">123-456-7890</a>
        </div>{" "}
        <div className="flex items-center space-x-5 justify-center md:justify-start">
          <MapPinIcon className="h-7 w-7" />
          <a href="https://goo.gl/maps/FtDnih2E1MoqPE889">Split, Croatia</a>
        </div>
      </div>

      {/*Contact Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-3 max-w-xl w-fit mx-auto"
      >
        <div className="flex space-x-2">
          <input
            {...register("name")}
            placeholder="Name"
            className="customInput"
            type="text"
          />
          <input
            {...register("email")}
            placeholder="Email"
            className="customInput"
            type="text"
          />
        </div>

        <input
          {...register("subject")}
          placeholder="Subject"
          className="customInput"
          type="text"
        />

        <textarea
          {...register("message")}
          placeholder="Message"
          className="customInput"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ContactMe;
