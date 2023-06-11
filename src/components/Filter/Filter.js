import css from './Filter.module.css';

export default function Filter({ onChangeFilter }) {
  const handleSearch = e => {
    const value = e.target.value;
    onChangeFilter(value);
  };
  return (
    <>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          name="filter"
          onChange={handleSearch}
        />
      </label>
    </>
  );
}
