import { useForm, SubmitHandler } from "react-hook-form";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { PageInfo } from "@/typings";
import ContactForm from "./ContactForm";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  pageInfo: PageInfo;
};

const ContactMe = ({ pageInfo }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData);

  return (
    <div className="h-screen relative flex flex-col text-center max-w-7xl justify-evenly mx-auto items-center">
      <h3 className="sectionHeader">Contact</h3>
      <div className="flex flex-col space-y-5 mt-24">
        <div className="flex items-center space-x-5 justify-center md:justify-start">
          <EnvelopeIcon className="h-7 w-7" />
          <a href={`mailto:${pageInfo?.email}`}>{pageInfo?.email}</a>
        </div>
        <div className="flex items-center space-x-5 justify-center md:justify-start">
          <PhoneIcon className="h-7 w-7" />
          <a href={`tel:${pageInfo?.phoneNumber}`}>{pageInfo?.phoneNumber}</a>
        </div>{" "}
        <div className="flex items-center space-x-5 justify-center md:justify-start">
          <MapPinIcon className="h-7 w-7" />
          <a href="https://goo.gl/maps/FtDnih2E1MoqPE889">Split, Croatia</a>
        </div>
      </div>

      {/*Contact Form */}
      {/* <form
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
      </form> */}
      <ContactForm />
    </div>
  );
};

export default ContactMe;
