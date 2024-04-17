import { activities } from "@/lib/data";
import Image from "next/image";

type ActivityProps = (typeof activities)[number];

const Activity = ({ name, labels, picture }: ActivityProps) => {
  return (
    <div className=" flex flex-col justify-center items-center gap-8 bg-white shadow-lg rounded-xl w-[19rem] h-[25rem] p-4">
      <Image
        src={picture}
        alt="Image des activités"
        width={150}
        height={150}
        className=" object-cover "
      />
      <h3 className="font-medium top-20 uppercase">{name}</h3>
      <p className="text-center">{labels}</p>
    </div>
  );
};

export default Activity;
