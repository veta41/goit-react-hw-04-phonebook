import PropTypes from 'prop-types';
import ContactListItem from '../Contacts/ContactItem/ContactItem';
import { List } from './ContactList.styled';

const ContactList = ({ contacts, onDeleleButton }) => {
  return (
    <List>
      {contacts.map(({ name, id, number }) => {
        return (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            onDeleleButton={onDeleleButton}
            id={id}
          />
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleleButton: PropTypes.func.isRequired,
};

export default ContactList;
