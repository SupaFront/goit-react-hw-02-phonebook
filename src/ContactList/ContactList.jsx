import styles from "./ContactList.module.css"

export default function ContactList({ contact, removeContact }) {
       
                return <ul>{contact.map(({ id, name, number }) => 
                       name? <li className={styles.theloop} key={id}><p className={styles.text}>{name}</p><p className={styles.txt}>{number}</p><button className={styles.btn} onClick={() => removeContact(id)}>Remove</button></li> : null)}
                </ul>
        
    
}