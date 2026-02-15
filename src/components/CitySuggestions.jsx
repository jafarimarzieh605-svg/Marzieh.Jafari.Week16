import CityItem from "./CityItem";

function CitySuggestions({ suggestions, onSelect }) {
  if (!suggestions.length) return null;

  return (
    <ul className="suggestions-box">
      {suggestions.map((city) => (
        <CityItem key={city} city={city} onSelect={onSelect} />
      ))}
    </ul>
  );
}

export default CitySuggestions;
