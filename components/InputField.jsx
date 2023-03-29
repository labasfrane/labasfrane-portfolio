import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
// type Props = {
//   type: string;
//   placeholder: string;
//   id: any;
//   inputId?: any;
//   message?: any;
//   pattern?: {
//     value?: any;
//     message?: any;
//   };
//   required?: any;
//   value?: boolean;
// };

const InputField = ({
  registerName,
  id,
  type,
  placeholder,
  errMessage,
  isRequired,
  hasSpanTwo,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <label
      className={
        hasSpanTwo
          ? "grid grid-rows-2 col-span-2"
          : "grid grid-rows-2 col-span-1"
      }
      htmlFor={id}
    >
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="customInput"
        {...register(`${registerName}`, {
          required: { value: { isRequired }, message: `${errMessage}` },
        })}
      />
      <ErrorMessage
        errors={errors}
        name={registerName}
        render={({ message }) => (
          <p className="text-customTeal animate-pulse text-center">{message}</p>
        )}
      />
    </label>
  );
};

export default InputField;
