function CityItem({ city, onSelect }) {
  return (
    <li className="suggestion-item" onClick={() => onSelect(city)}>
      {city}
    </li>
  );
}

export default CityItem;
