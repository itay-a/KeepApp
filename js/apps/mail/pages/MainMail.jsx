import { MailFilter } from "../cmps/MailFilter.jsx";
import { MailList } from "../cmps/MailList.jsx"
import { MailService } from "../services/mail.service.js"
import { MailDetails } from "../cmps/MailDetails.jsx";
export class MainMail extends React.Component {

    state = {
        mails: [],
        filterBy: null
    }


    componentDidMount() {
        this.loadMails();
    }

    // filter
    loadMails = () => {
        MailService.query(this.state.filterBy)
            .then((mails) => {
                this.setState({ mails });
            })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadMails);
        this.loadMails(filterBy)
    };

    render() {
        const { mails } = this.state
        // if (!this.state.mails) return <div>Loading...</div>
        return (
            <section className='main-mail'>
                <MailFilter onSetFilter={this.onSetFilter}/>
                <MailList mails={mails} />
                
            </section>
        )
    }
}