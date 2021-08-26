import { MailDetails } from "../cmps/MailDetails.jsx";


export class MailPreview extends React.Component {

    state = {
        isMarked: false
    }

    toggleMarkedMail = () => {
        this.setState({ isMarked: !this.state.isMarked})
    }



    render() {
        const { isMarked } = this.state
        const { mail } = this.props
        return (
            <React.Fragment>
                <div className="mail-preview" onClick={this.toggleMarkedMail}> 
                        <h3>{mail.subject}</h3>
                {isMarked && <MailDetails mail={mail} />}
                </div>
            </React.Fragment>
        )
    }

}