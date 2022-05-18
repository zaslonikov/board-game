import {useState} from "react";
import {Dropdown} from "../../helpers/dropdown";
import {getDifficult} from "../../requests/requests";
import {useAsync} from "react-async-hook";

const Settings = () => {
  const [difficult, setDifficult] = useState("")
  const {result: options} = useAsync(getDifficult, [])


  return (
    options ? <div className={"my-5 flex flex-row gap-10 h-12"}>
        <Dropdown selected={difficult} setSelected={setDifficult} options={options.map((item) => item.name)}/>
        <button
          disabled={!difficult}
          onClick={() => console.log("starttt")}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed disabled:text-white`}
        >Start
        </button>
      </div>
      : <p>Loading...</p>
  );
};

export default Settings;