
import { mailService } from '../services/mail.service.js'

export class MailAdd extends React.Component {
    state = {
        newMail: {
            to:'',
            subject: '',
            body: '',
            id: ''
        },
    }

    onHandlechange = (ev) => {
        const field = ev.target.name;
        const value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value
        this.setState((prevState) => ({ ...prevState, newMail: { ...prevState.newMail, [field]: value } }));
    }

    onSendMail = (ev) => {
        ev.preventDefault();
        mailService.sendMail(this.state.newMail.id);
        this.props.history.push();
    }

    render() {
        const { subject, body } = this.state.newMail
        return <section className="new-mail flex">
            {/* <Link to="/mail"><i className="fas fa-arrow-left" title="Go to inbox"></i></Link> */}
            <h1>New mail</h1>
            <div className="compose-mail">
                <button onClick={() => { on }}></button>
                <form className="flex" onSubmit={this.onSendMail}>
                    {/* <input type="email" name="to" placeholder="To" value={to} required onChange={this.onHandlechange} /> */}
                    <input type="text" name="subject" placeholder="Subject"  onChange={this.onHandlechange} />
                    <textarea placeholder="Text goes here" name="body"  onChange={this.onHandlechange}></textarea>
                    <button>Send</button>
                </form>
            </div>
        </section>
    }
}