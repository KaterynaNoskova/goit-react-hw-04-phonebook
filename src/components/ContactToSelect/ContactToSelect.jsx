import css from './ContactToSelect.module.css';

export const ContactToSelect = ({ name, number, remove, id }) => {
  return (
    <div>
      <span>
        {name} : {number}
      </span>
      <button className={css.buttonDelete} type="button" onClick={() => remove(id)}>
        Delete
      </button>
    </div>
  );
};
