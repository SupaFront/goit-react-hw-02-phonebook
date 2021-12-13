

export default function ContactList({ contact, removeContact }) {
       
                return <ul>{contact.map(({ id, name, number }) => 
                       name? <li key={id}><p>{name}</p><p>{number}</p><button onClick={() => removeContact(id)}>Remove</button></li> : null)}
                </ul>
        
    
}