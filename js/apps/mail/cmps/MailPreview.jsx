import { MailDetails } from "../cmps/MailDetails.jsx";
import { MailService } from "../services/mail.service.js";

export class MailPreview extends React.Component {

    state = {
        isMarked: false
    }

    toggleMarkedMail = () => {
        this.setState({ isMarked: !this.state.isMarked})
    }

    // onDeleteMail = (mailId) => {
    //     MailService.deleteMail(mailId)
    //     // this.onSelectMail(null)
    //     this.loadMails()
    // }


    render() {
        const { isMarked } = this.state
        const { mail, onDeleteMail } = this.props
        return (
            <React.Fragment>
                <div className="mail-preview" onClick={this.toggleMarkedMail}> 
                        <h3>{mail.subject}</h3>
                {isMarked && <MailDetails mail={mail} onDeleteMail={onDeleteMail} />}
                </div>
            </React.Fragment>
        )
    }

}