import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';


export const Filter = () => {
  const filter = useSelector( state => state.filter)
  const dispatch = useDispatch();

  const onFilter = event => {
    const { value } = event.target;
    dispatch({type: 'onFilter', payload: value})
  };

  return (
    <>
      <h3 className={css.searchTitle}>Find contacts by name</h3>
      <input
        className={css.searchField}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={onFilter}
      />
    </>
  );
};
