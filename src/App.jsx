import { useReducer } from "react";
import cities from "./data/cities";
import cityReducer, { initialState } from "./reducers/cityReducer";

import CityInput from "./components/CityInput";
import CitySuggestions from "./components/CitySuggestions";

function App() {
  const [state, dispatch] = useReducer(cityReducer, initialState);

  const handleSelectCity = (city) => {
    dispatch({ type: "SET_INPUT", payload: city });
    dispatch({ type: "SET_SUGGESTIONS", payload: [] });
  };

  return (
    <div className="app">
      <div className="autocomplete-card">
        <h2>Select City</h2>

        <CityInput
          inputValue={state.inputValue}
          dispatch={dispatch}
          cities={cities}
        />

        <CitySuggestions
          suggestions={state.suggestions}
          onSelect={handleSelectCity}
        />
      </div>
    </div>
  );
}

export default App;
