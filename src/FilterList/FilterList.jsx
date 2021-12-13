
export default function FilterList({filter, onFilterChange }) {
    const onChange = event => {
        onFilterChange(event.target.value);
      };
    return(
        <label >
            Find contacts by name
            <input
        
        type="text"
        value={filter}
        onChange={onChange}
        name="filter"
      />
        </label>
    )
}