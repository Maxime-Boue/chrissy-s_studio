import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white 
      rounded-full outline-none focus:scale-110 hover:scale-110 font-medium active:scale-105 group-hover:bg-gray-950 transition-all disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          {" "}
          Envoyer{" "}
          <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1  text-xs-opacity-70 transition-all" />
        </>
      )}
    </button>
  );
};

export default SubmitBtn;
