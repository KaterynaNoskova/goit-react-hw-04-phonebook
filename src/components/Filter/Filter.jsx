import css from './Filter.module.css';

export const Filter = ({ change, filter }) => {
  return (
    <div className={css.filter}>
      <h2 className={css.filterContact}>Contacts</h2>
      <p className={css.filterParagraf}>Find contacts by name</p>
      <input className={css.filterInput} type="text" name="filter" onChange={change} value={filter} />
    </div>
  );
};
