// const { Link, NavLink } = ReactRouterDOM
// // import { eventBusService } from '../../../services/eventbus.service.js'

// export class MailNav extends React.Component {

//     state = {
//         unReadMails: 0
//     }
//     // removeEventBut;

//     // componentDidMount() {
//     //     this.removeEventBus = eventBusService.on('unread-mails-count', (unReadMails) => {
//     //         this.setState({ unReadMails })
//     //     })
//     // }

//     // componentWillUnmount() {
//     //     this.removeEventBus();
//     // }

//     render() {
//         const { unReadMails } = this.state
//         return (
//             <section className="side-nav">
//                 {/* <Link to="/mail/new"><i className="fas fa-plus"></i> Compose</Link> */}
//                 <ul className="clean-list  flex" >
                    
//                         <button>Inbox</button>
//                         {/* <NavLink to="/mail/inbox" className="flex align-center">
//                             <i className="fas fa-envelope"></i> Inbox
//                             <span>{unReadMails}</span>
//                         </NavLink> */}
                    
                    
//                         <button>Starred</button>
//                         {/* <NavLink to="/mail/starred" className="flex align-center">
//                             <i className="fas fa-star"></i> Starred
//                         </NavLink> */}
                    
                    
//                         <button>Sent</button>
//                         {/* <NavLink to="/mail/sent" className="flex align-center">
//                             <i className="fas fa-paper-plane"></i> Sent
//                         </NavLink> */}
                    
                    
//                         <button>Draft</button>
//                         {/* <NavLink to="/mail/draft" className="flex align-center">
//                             <i className="fas fa-file"></i> Draft
//                         </NavLink> */}
                    

//                         <button>Trash</button>
//                         {/* <NavLink to="/mail/trash" className="flex align-center">
//                             <i className="fa fa-trash" aria-hidden="true"></i> Trash
//                         </NavLink> */}
                    
//                 </ul>
//             </section>
//         )

//     }
// }