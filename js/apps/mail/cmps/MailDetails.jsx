
export function MailDetails({mail, onDeleteMail}){


    return(
        <section className="mail-details">
            {mail.body}
            <button onClick={()=> {onDeleteMail(mail.id)}}>Delete</button>
        </section>
    )
}