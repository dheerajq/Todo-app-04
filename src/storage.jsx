import { useState } from "react";

const Todo = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [indexValue, setIndexValue] = useState("");
  console.log(value);

  const addTodo = () => {
    if (value.trim() !== "") {
      setData([...data, value]);
      setValue("");
    } else {
      alert("please fill the input box");
    }
  };

  const removeTask = (index) => {
    const filtered = data.filter((datas, i) => i !== index);
    setData(filtered);
  };

  const editTask = (index) => {
    setEditIndex(index);
    setIndexValue(data[index]);
  };

  const saveTask = () => {
    const updatedValue = [...data];
    updatedValue[editIndex] = indexValue;
    setData(updatedValue);
    setEditIndex(-1);
    setIndexValue('')
  };
  return (
    <>
      <div>
        <h1>Todo Lists</h1>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={addTodo}>add</button>
        <ul>
          {data.map((datas, index) => (
            <>
              <li key={index}>{datas}</li>
              {index === editIndex ? (
                <div>
                  <input
                    type="text"
                    value={indexValue}
                    onChange={(e) => setIndexValue(e.target.value)}
                  />
                  <button onClick={() => saveTask()}>save </button>
                </div>
              ) : (
                <div>
                  <button onClick={() => removeTask(index)}>remove</button>
                  <button onClick={() => editTask(index)}>edit</button>
                </div>
              )}
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
