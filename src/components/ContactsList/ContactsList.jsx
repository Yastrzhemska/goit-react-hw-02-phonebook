

export const ContactList = ({ title, contacts }) => {
    return (
        <>
            {/* {title && <h2>{title}</h2>} */}
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        {contact.name + ': ' + contact.tel}
                    </li>
                ))}
                
            </ul>
        </>
        
    );
};