import React from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contact/contact-operation';
import { getError, getFilteredContacts, getLoadind} from '../../redux/contact/contact-selectors';

const ContactList = ({ contacts, deleteContact, loading }) => {
  const onHandleChange = e => {
    deleteContact(e.target.id);
  };
  return (
    <ul>
      {contacts.map(({ name, id, number }) => (
        <li key={id}>
          <p>
            {`Имя: ${name} | Номер: ${number}`}
            <button className="Button" id={id} type="button" onClick={onHandleChange}>
              Удалить
            </button>
          </p>
        </li>
      ))}
    </ul>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(deleteContact(id)),
});

const mapStateToProps = state => ({
  contacts: getFilteredContacts(state),
  loading: getLoadind(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);