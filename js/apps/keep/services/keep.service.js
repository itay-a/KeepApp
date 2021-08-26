
// import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'

const KEY = 'note';

export const keepService = {
    query,
}

// _creatNotes()


function query(filterBy) {
    if (filterBy) {
        let { type } = filterBy
        const filteredNotes = notes.filter(note => {
            return note.type.includes(type)
        })
        return Promise.resolve(filteredNotes)
    }
    return Promise.resolve(notes)
}

// function _creatNotes() {
//     var loadNotes = storageService.loadFromStorage(KEY)
//     if (!loadNotes || !loadNotes.length) {
//         loadNotes = notes
//     }
//     else {
//         notes = loadNotes;
//     }
//     _saveNotesToStorage()
// }


// function _saveNotesToStorage() {
//     storageService.saveToStorage('note', notes)
// }

// _saveNotesToStorage();

const notes = [
    {
        id: "n101",
        type: "note-txt",
        isPinned: true,
        info: { txt: "Fullstack Me Baby!" }
    },

    {
        id: "n102",
        type: "note-img",
        info: { url: "http://some-img/me", title: "Bobi and Me" },
        style: { backgroundColor: "#00d" }
    },

    {
        id: "n103",
        type: "note-todos",
        info: {
            label: "Get my stuff together",
            todos: [
                { txt: "Driving liscence", doneAt: null },
                { txt: "Coding power", doneAt: 187111111 }
            ]
        }
    }
];