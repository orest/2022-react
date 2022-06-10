import { useEffect, useState } from "react";
import ExerciseLogList from "../components/ExerciseLog/ExerciseLogList";
import Loading from "../components/UI/Loading/Loading";
import PageBody from "../components/UI/PageBody";

const ExerciseLog = () => {
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const baseApiUrl = "https://localhost:7001/api/Entries";

  useEffect(() => {
    refresh();
  }, []);

  const onLoadHandler = () => {
    console.log("clicked ");
    refresh2();
  };

  const refresh = () => {
    console.log(1);

    fetch(baseApiUrl)
      .then((response) => {
        setIsLoading(false);
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
      setIsLoading(false);
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
      {isLoading && <Loading />}
      <ExerciseLogList entries={entries}></ExerciseLogList>

      <button className="btn btn-outline-primary" onClick={onLoadHandler}>
        Load
      </button>
    </PageBody>
  );
};
export default ExerciseLog;
