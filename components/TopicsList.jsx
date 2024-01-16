import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });


    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};


export default async function TopicsList() {
  const topics  = await getTopics();

  console.log(topics);

  return (
    <>
      {topics.map((t) => (
      <div key={t._id} className="p-4 border border-slate-300 rounded-md my-3 flex justify-between gap-5 items-start">
        <div>
          <h2 className="font-bold text-lime-800 text-2xl">{t.title}</h2>
          <div className="text-slate-500">{t.description}</div>
        </div>

        <div className="flex gap-2">
          <RemoveBtn id={t._id} />
          <Link href={`/edittopic/${t._id}`}>
            <HiPencilAlt className="text-lime-600 hover:text-lime-800" size={24} />
          </Link>
        </div>
      </div>
       ))}  
    </>
  );
}
