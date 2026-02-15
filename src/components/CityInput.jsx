function CityInput({ inputValue, dispatch, cities }) {
  const handleChange = (e) => {
    const value = e.target.value;

    dispatch({ type: "SET_INPUT", payload: value });

    if (!value) {
      dispatch({ type: "SET_SUGGESTIONS", payload: [] });
      return;
    }

    const filtered = cities.filter((city) =>
      city.toLowerCase().includes(value.toLowerCase())
    );

    dispatch({ type: "SET_SUGGESTIONS", payload: filtered });
  };

  return (
    <input
      className="city-input"
      type="text"
      value={inputValue}
      onChange={handleChange}
      placeholder="Start typing a city..."
    />
  );
}

export default CityInput;
