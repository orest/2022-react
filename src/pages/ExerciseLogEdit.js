import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ExerciseLogForm from "../components/ExerciseLog/ExerciseLogForm";
import PageBody from "../components/UI/PageBody";

const ExerciseLogEdit = () => {
  //const { id } = useParams();
  const nav = useNavigate();

  const params = useParams();
  const [entry, setEntry] = useState();
  const baseApiUrl = "https://localhost:7001/api/Entries";

  const id = params.id;
  useEffect(() => {
    getById();
  }, []);

  const convertToDateString = (dateString) => {
    let createDate = new Date(dateString);
    var month = createDate.getMonth() + 1;
    if (month < 10) month = "0" + month;

    var day = createDate.getDate();
    if (day < 10) day = "0" + day;

    var editDate = `${createDate.getFullYear()}-${month}-${day}`;
    return editDate;
  };

  const getById = async () => {
    const response = await fetch(`${baseApiUrl}/${id}`);
    const data = await response.json();

    data.createDate = convertToDateString(data.createDate);
    setEntry(data);

    console.log(data);
  };

  const saveEntry = (data) => {
    fetch(`${baseApiUrl}/${id}`, {
      method: "put",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((p) => {
      if (p.ok) {
        nav("/exercise-log");
      } else {
        debugger;
      }
    });
  };

  return <PageBody pageTitle="Edit Entry">{!!entry && <ExerciseLogForm entry={entry} onSave={saveEntry} />}</PageBody>;
};

export default ExerciseLogEdit;
