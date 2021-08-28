
// import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'

const KEY = 'noteDB';

export const keepService = {
    query,
    deleteKeep,
    addKeep
}

let notes = [

    {
        id: "n101",
        type: "note-txt",
        isPinned: true,
        info: { txt: "Fullstack Baby!", title: "Coding" }
    },
    {
        id: "n102",
        type: "note-txt",
        isPinned: true,
        info: { txt: "z", title: "zed" }
    },
    {
        id: "n103",
        type: "note-txt",
        isPinned: true,
        info: { txt: "A chopper is a type of custom motorcycle which emerged in California in the late 1950s. A chopper employs radically modified steering angles and lengthened forks for a stretched-out appearance.A chopper is a type of custom motorcycle which emerged in California in the late 1950s. A chopper employs radically modified steering angles and lengthened forks for a stretched-out appearance.", title: "zed is dead" }
    },

    {
        id: "n104",
        type: "note-img",
        info: { url: "https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2019/10/08113321/Dog-behavior-Kasper-Luijsterburg.jpg", title: "Bobi and Me" },
        style: { backgroundColor: "#00d" }
    },
    {
        id: "n107",
        type: "note-img",
        info: { url: "https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2019/10/08113321/Dog-behavior-Kasper-Luijsterburg.jpg", title: "Bobi and Me" },
        style: { backgroundColor: "#00d" }
    },
    {
        id: "n108",
        type: "note-img",
        info: { url: "https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2019/10/08113321/Dog-behavior-Kasper-Luijsterburg.jpg", title: "Bobi and Me" },
        style: { backgroundColor: "#00ff99" }
    },

    {
        id: "n105",
        type: "note-todos",
        info: {
            label: "Get my stuff together",
            todos: [
                { txt: "Driving liscence", doneAt: null },
                { txt: "Coding power", doneAt: 187111111 }
            ]
        }
    },
    {
        id: "n106",
        type: "note-todos",
        info: {
            label: "Delete me",
            todos: [
                { txt: "Delete this todoq", doneAt: null },
                { txt: "Coding please delete me", doneAt: 187111111 }
            ]
        }
    }
];

_creatNotes()


function query(filterBy) {
    if (filterBy) {
        let filteredNotes = [];

         notes.forEach(note => {
            switch (note.type) {
                case 'note-txt':
                    if (note.info.txt.toLowerCase().includes(filterBy.text)) { filteredNotes.push(note) }
                    else if (note.info.title.toLowerCase().includes(filterBy.text)) { filteredNotes.push(note) }
                    break;
                case 'note-img':
                    if (note.info.title.toLowerCase().includes(filterBy.text)) { filteredNotes.push(note) }
                    break;
                case 'note-todos':
                    if (note.info.label.toLocaleLowerCase().includes(filterBy.text)) { filteredNotes.push(note) }
                    // else if (note.info.todos.txt.toLocaleLowerCase().includes(filterBy.text)) { filteredNotes.push(note) }
                    break;
            }
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

function getKeepById(idx) {
    return notes.findIndex(note => note.id === idx)
}

function deleteKeep(keepId) {
    let noteIdx = getKeepById(keepId)
    notes.splice(noteIdx,1);
    _saveNotesToStorage()
    return Promise.resolve()
}

function addKeep(newKeep) {
    console.log(newKeep);
notes.push(newKeep);
_saveNotesToStorage(KEY, notes);
}

function _saveNotesToStorage() {
    storageService.saveToStorage(KEY, notes)
}

_saveNotesToStorage();

