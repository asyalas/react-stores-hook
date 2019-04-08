import React from "react";
import { useGlobalContext } from "../dist";
const All = () => {
  const globalStates = useGlobalContext();
  const [state, setState] = React.useState(0);
  const addAgeHandle = (dispatch: React.Dispatch<any>) => {
    dispatch((data: any) => ({
      ...data,
      age: data.age + 1
    }));
    setState(state + 1);
  };
  const dom = Object.entries(globalStates).map(([, v]) => (
    <div key={v.state.name}>
      name : {v.state.name} <br />
      age:{v.state.age}
      <br />
      value:{JSON.stringify(v.getState())}
      <button onClick={() => addAgeHandle(v.dispatch)}> add</button>
    </div>
  ));
  return <div>{dom}</div>;
};

export default All;