import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExerciseLogForm from "../components/ExerciseLog/ExerciseLogForm";
import PageBody from "../components/UI/PageBody";

const ExerciseLogEdit = () => {
  //const { id } = useParams();
  const params = useParams();
  const [entry, setEntry] = useState();
  const baseApiUrl = "https://localhost:7001/api/Entries";

  const id = params.id;

  useEffect(() => {
    getById();
  }, [id]);

  const getById = async () => {
    const response = await fetch(`${baseApiUrl}/${id}`);
    const data = await response.json();
    setEntry(data);
    console.log(data);
  };

  return (
    <PageBody pageTitle="Edit Entry">
      {id}
      <ExerciseLogForm></ExerciseLogForm>
    </PageBody>
  );
};

export default ExerciseLogEdit;
