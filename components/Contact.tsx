"use client";

import { sendEmail } from "@/actions/sendEmail";
import useSectionInView from "@/lib/hook";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import SubmitBtn from "./SubmitBtn";

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Vous pouvez directement me contacter à cette adresse :{" "}
        <a
          className="underline font-medium"
          href="mailto:boue.maxime6@gmail.com"
        >
          boue.maxime6@gmail.com
        </a>{" "}
        ou en remplissant le formulaire ci-dessous
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-90"
          type="email"
          name="senderEmail"
          placeholder="Votre email"
          required
          maxLength={500}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-90"
          name="message"
          placeholder="Votre message"
          required
          maxLength={5000}
        />
        <div className="flex justify-end">
          <SubmitBtn />
        </div>
      </form>
    </motion.section>
  );
};

export default Contact;
