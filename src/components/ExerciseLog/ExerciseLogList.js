import { Link } from "react-router-dom";

const ExerciseLogList = (props) => {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Type</th>
            <th>Duration</th>
            <th>Distance</th>
            <th>Date</th>
            <th>Notes</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.entries.map((p) => {
            return (
              <tr key={p.entryId}>
                <td>{p.typeCode}</td>
                <td>{p.duration} </td>
                <td>{p.distance} </td>
                <td>{p.createDate} </td>
                <td>{p.notes} </td>
                <td>
                  <Link to={"/exercise-log/" + p.entryId}>Edit</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default ExerciseLogList;
