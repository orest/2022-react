import { useState } from "react";
import { Link } from "react-router-dom";

const ExerciseLogForm = (props) => {
  const [typeCode, setTypeCode] = useState(props.entry.typeCode);
  const [distance, setDistance] = useState(props.entry.distance);
  const [notes, setNotes] = useState(props.entry.notes);
  const [duration, setDuration] = useState(props.entry.duration);
  const [createDate, setCreateDate] = useState(props.entry.createDate);
  const [errorMessage, setErrorMessage] = useState();

  const createDateHandler = (e) => {
    setCreateDate(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!typeCode) {
      setErrorMessage("Activity type is required ");
      return;
    }
    //to check all inputs

    let data = {
      entryId: props.entry.entryId,
      typeCode: typeCode,
      duration: duration,
      distance: distance,
      createDate: createDate,
      notes: notes,
    };
    console.log(data);

    props.onSave({ ...data });
  };

  return (
    <div>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <form onSubmit={formSubmitHandler}>
        <div className="row">
          <div className="mb-3 col-6">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input type="date" className="form-control" id="date" value={createDate} onChange={createDateHandler} />
          </div>

          <div className="mb-3 col-6">
            <label htmlFor="activity" className="form-label">
              Activity
            </label>
            <select className="form-select" id="activity" value={typeCode} onChange={(e) => setTypeCode(e.target.value)}>
              <option value="">select</option>
              <option>Running</option>
              <option>Walking</option>
              <option>Lifting</option>
              <option>Swimming</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="mb-3 col-6">
            <label htmlFor="duration" className="form-label">
              Duration
            </label>
            <input
              type="number"
              className="form-control"
              id="duration"
              onChange={(e) => {
                setDuration(e.target.value);
              }}
              value={duration}
            />
          </div>

          <div className="mb-3 col-6">
            <label htmlFor="distance" className="form-label">
              Distance
            </label>
            <input
              type="number"
              className="form-control"
              id="distance"
              value={distance}
              onChange={(e) => {
                setDistance(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="notes" className="form-label">
            Notes
          </label>
          <textarea
            rows="5"
            className="form-control"
            id="notes"
            onChange={(e) => {
              setNotes(e.target.value);
            }}
            value={notes}
          ></textarea>
        </div>

        <div className="mb-3 text-end">
          <Link to="/exercise-log" className="btn btn-outline-secondary  w-25">
            Cancel
          </Link>

          <button className="btn btn-success ms-2 w-25" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
export default ExerciseLogForm;
