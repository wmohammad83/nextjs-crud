import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
     try {
        const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
            cache: "no-store",
          });

          if(!res.ok) {
              throw new Error("Something went wrong");
          }

          return res.json();
          
     } catch (error) {
        console.log(error); 
     }
}

export default async function EditTopic({ params  }) {
    const { id } = params;
    const {topic} = await getTopicById(id);
    const { title, description } = topic;
    console.log("id: ",id);
  return <EditTopicForm id={id} title={title} description={description} />;
}
