export const ContactList = ({contacts}) => {
    return (
        <ul>
            {contacts.map(contact => {
                const { id, name, number } = contact;
                return <li key={id}>
                    <p>{name} : { number }</p>
                </li>
            })}
        </ul>
    )
}