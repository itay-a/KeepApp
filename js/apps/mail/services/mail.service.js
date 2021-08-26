import { storageService } from './storage.service.js'
import { mails } from './mails.data.js'


let gMails;
const KEY = 'mailsDB';

export const MailService = {

    query,

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
