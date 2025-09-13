import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

//date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  // Format the createdAt date nicely
  
  // Delete workout handler
  const handleClick = async () => {
    if (!user) {
      return
    }
    const response = await fetch(`/api/workouts/${workout._id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${user.token}`,
      }
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
      console.log("Workout deleted:", json);
    }
  };

  return (
    <div className="workout-card">
      {/* Header */}
      <div className="workout-header">
        <h4 className="workout-title">{workout.title}</h4>
        <button className="delete-btn" onClick={handleClick} title="Delete workout">
          ✕
        </button>
      </div>

      {/* Workout Info */}
      <div className="workout-info">
        <p><strong>Load:</strong> {workout.load} kg</p>
        <p><strong>Reps:</strong> {workout.reps}</p>
        <p>{formatDistanceToNow(new Date(workout.createdAt), {addSifuffix: true})}</p>
      </div>
    </div>
  );
};

export default WorkoutDetails;
