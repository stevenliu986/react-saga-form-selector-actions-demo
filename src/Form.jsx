import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

function Form({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitTask = (data) => {
    const { taskInput } = data;
    onSubmit(taskInput);
  };
  return (
    <form onSubmit={handleSubmit(onSubmitTask)}>
      <h2>
        <label>What needs to be done?</label>
      </h2>
      <input
        {...register("taskInput", {
          required: "task is required",
        })}
      />
      {errors.taskInput && <p style={{ color: "red" }}>Task is required</p>}
      <button type="submit">Add</button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
};
export default Form;
