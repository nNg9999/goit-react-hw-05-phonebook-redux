import React from 'react';
import { string, arrayOf, exact } from 'prop-types';


import ContactListItem from "../ContactListItem/ContactListItem.Container";
// redux
import { connect } from "react-redux";
import contactsSelectors from "../../modules/contacts/contactsSelectors";


// styles
import styles from '../ContactList/ContactList.module.scss';

const ContactList = ({ contacts }) => {


  return (
    <ul className={styles.contactList}>

      {contacts.map(({ id }) =>
        <ContactListItem key={id} id={id} />
      )}

    </ul>
  )
};

ContactList.defaultProps = {};

ContactList.propTypes = {
  contacts: arrayOf(exact({
    id: string.isRequired,
    name: string.isRequired,
    number: string.isRequired,
  })).isRequired,

};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVC(state),
})


export default connect(mapStateToProps)(ContactList);
