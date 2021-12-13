

export default function ContactList({ contact, removeContact }) {
    console.log(contact)
        return <ul>{ contact.map(({ id, name, number }) =>
                <li key={id}><p>{name}</p><p>{number}</p><button>Remove</button></li>)}
        </ul>
    
}