import styles from "./ContactList.module.css";
import PropTypes from 'prop-types';

export default function ContactList({ contact, removeContact }) {
       
                return <ul>{contact.map(({ id, name, number }) => 
                       name? <li className={styles.theloop} key={id}><p className={styles.text}>{name}</p><p className={styles.txt}>{number}</p><button className={styles.btn} onClick={() => removeContact(id)}>Remove</button></li> : null)}
                </ul>
        
    
}

ContactList.propTypes = {
    contact: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.idRequired,
            number: PropTypes.string.isRequired
        })
    ),
    removeContact: PropTypes.func.isRequired
}