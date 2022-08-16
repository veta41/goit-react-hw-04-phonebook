import PropTypes from 'prop-types';
import { ContactCard, Name, Number, DeleteBtn } from './ContactItems.styled';

const ContactListItem = ({ name, id, number, onDeleleButton }) => {
  return (
    <ContactCard>
      <Name>{name}</Name>
      <Number>{number}</Number>
      <DeleteBtn type="button" id={id} onClick={onDeleleButton}>
        Delete
      </DeleteBtn>
    </ContactCard>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleleButton: PropTypes.func.isRequired,
};

export default ContactListItem;
