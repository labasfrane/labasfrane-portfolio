import { useForm, SubmitHandler } from "react-hook-form";

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
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-customYellow text-2xl">
        Contact
      </h3>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-fit mx-auto"
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
