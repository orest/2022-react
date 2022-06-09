import { useEffect, useState } from "react";
import ExerciseLogList from "../components/ExerciseLog/ExerciseLogList";
import PageBody from "../components/UI/PageBody";

const ExerciseLog = () => {
  const [entries, setEntries] = useState([]);
  const baseApiUrl = "https://localhost:7001/api/Entries";

  useEffect(() => {
    refresh2();
  }, []);

  const onLoadHandler = () => {
    console.log("clicked ");
    refresh2();
  };

  const refresh = () => {
    console.log(1);

    fetch(baseApiUrl)
      .then((response) => {
        console.log(2);
        return response.json();
      })
      .then((data) => {
        console.log(3);
        console.log(data);
        setEntries(data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(4);
  };

  const refresh2 = async () => {
    try {
      let response = await fetch(baseApiUrl);
      if (response.ok) {
        let body = await response.json();
        setEntries(body);
      } else {
        debugger;
        console.log("Errors");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <PageBody pageTitle="Exercise Log">
      <ExerciseLogList entries={entries}></ExerciseLogList>

      <button className="btn btn-outline-primary" onClick={onLoadHandler}>
        Load
      </button>
    </PageBody>
  );
};
export default ExerciseLog;
