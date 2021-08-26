
// import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'

const KEY = 'note';

export const keepService = {
    query,
}

let notes = [
    {
        id: "n101",
        type: "note-txt",
        isPinned: true,
        info: { txt: "Fullstack Me Baby!" }
    },

    {
        id: "n102",
        type: "note-img",
        info: { url: "https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2019/10/08113321/Dog-behavior-Kasper-Luijsterburg.jpg", title: "Bobi and Me" },
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

_creatNotes()


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

function _creatNotes() {
    let loadNotes = storageService.loadFromStorage(KEY)
    if (!loadNotes || !loadNotes.length) {
        loadNotes = notes
    }
    else {
        notes = loadNotes;
    }

    _saveNotesToStorage()
}


function _saveNotesToStorage() {
    storageService.saveToStorage('note', notes)
}

_saveNotesToStorage();

