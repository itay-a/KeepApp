import { storageService } from './storage.service.js'
import { mails } from './mails.data.js'


let gMails;
const KEY = 'mailsDB';

export const MailService = {

    query,
    addMail,
    deleteMail,
    getMailById,
    sendMail,

}

_createMails();

function query(filterBy) {
    if (filterBy) {
        let {text} = filterBy
        const mailsToShow = gMails.filter(mail => {
            return mail.body.toLowerCase().includes(text) || mail.subject.toLowerCase().includes(text)
        })
        return Promise.resolve(mailsToShow);
    }
    return Promise.resolve(gMails);

}
function getMailById(mailId) {
    const mail = gMails.find(mail => mail.id === mailId)
    return Promise.resolve(mail)

}



function deleteMail(mailId){
    var mailIdx = gMails.findIndex( function (mail) {
        return mailId === mail.id;
    })
    gMails.splice(mailIdx, 1)
    _saveMailsToStorage();
    return Promise.resolve();
}

//     })
//     gMails.splice(mailIdx, 1)
//     _saveMailsToStorage();
// }

function sendMail(mailId) {
    const mailIdx = getMailIndex(mailId);
    gMails[mailIdx].sentAt = Date.now();
    gMails[mailIdx].isDraft = false;
}

function sendMail(mailId) {
    const mailIdx = getMailIndex(mailId);
    gMails[mailIdx].sentAt = Date.now();
    gMails[mailIdx].isDraft = false;
}

function getMailIndex(mailId) {
    return gMails.findIndex(mail => mail.id === mailId);
}

function addMail(mailToEdit) {
    var mail = _createMails(mailToEdit.id, mailToEdit.subject)
    gMails.unshift(mail)
    _saveMailsToStorage();
    return Promise.resolve()
}

function _createMails() {
    var loadMails = storageService.loadFromStorage(KEY)
    if (!loadMails || !loadMails.length) {
        gMails = mails;
    } else {
        gMails = loadMails;
    }
    _saveMailsToStorage();
}



function _saveMailsToStorage() {
    storageService.saveToStorage(KEY, gMails);
}
