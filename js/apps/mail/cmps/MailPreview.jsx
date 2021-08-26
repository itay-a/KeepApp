export function MailPreview({ mail }) {

    return (
        <div className="mail-preview">
            <h3>Subject - {mail.subject}</h3>
            <p>Body - {mail.body}</p>
        </div>
    )

}