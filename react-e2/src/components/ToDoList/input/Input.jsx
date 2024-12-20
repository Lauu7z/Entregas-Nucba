import {useContext} from "react";
import {Button} from "../button/Button";
import {TaskContext} from "../../../context/ContextTask";
import {DivInput, SectionInput} from "./input-styles";

export const Input = () => {
  const {addTask, handleInputChange, error} = useContext(TaskContext);

  return (
    <>
      <SectionInput>
        <DivInput>
          <input
            type="text"
            onChange={handleInputChange}
            placeholder="Que tarea desea agregar?"
          />
          <Button
            label="Agregar"
            bgcolor={"#3364ff"}
            padding="10px 15px"
            onClick={addTask}
          />
        </DivInput>
        {error && <p>{error}</p>}
      </SectionInput>
    </>
  );
};
