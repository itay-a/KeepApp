import { MailFilter } from "../cmps/MailFilter.jsx";
import { MailList } from "../cmps/MailList.jsx"
import { MailService } from "../services/mail.service.js"
import { MailDetails } from "../cmps/MailDetails.jsx";
// import { MailNav } from '../cmps/MailNav.jsx'
import { MailPreview } from "../cmps/MailPreview.jsx";
import { MailAdd } from "../cmps/MailAdd.jsx";
export class MainMail extends React.Component {

    state = {
        mails: [],
        filterBy: null,
        selectedMail: null
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
    // onSelectMail = (mail) => {
    //     this.setState({ selectedMail: mail })
    // }
    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadMails);
        this.loadMails(filterBy)
    };

    onDeleteMail = (mailId) => {
        MailService.deleteMail(mailId)
        // this.onSelectMail(null)
        this.loadMails()
    }


    render() {
        const { mails } = this.state
        // if (!this.state.mails) return <div>Loading...</div>
        return (
            <React.Fragment>
                <div className="add-filter">
                    <MailFilter onSetFilter={this.onSetFilter}/>
                    <MailAdd onHandleChange={this.onHandleChange}/>
                </div>
                <section className='main-mail flex main-layout'>
                    {/* <aside>
                        <MailNav />
                    </aside> */}
                    <MailList onDeleteMail={this.onDeleteMail} mails={mails} />

                </section>
            </React.Fragment>
        )
    }
}