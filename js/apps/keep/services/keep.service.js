
// import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'

const KEY = 'noteDB';

export const keepService = {
    query,
    deleteKeep,
    addKeep,
    embedVideo
}

let notes = [
    
    {
        id: "n105",
        type: "note-todos",
        info: {
            label: "To do",
            todos: [
                { txt: "Nothing special today", doneAt: null },
                { txt: "Lots of rest not API", doneAt: 187111111 }
            ]
        }
    },
    {
        id: "n101",
        type: "note-txt",
        isPinned: true,
        info: { txt: "The Canaan Dog is a breed of pariah dog abundant all over the Middle East. It can be found in Israel, Jordan, Lebanon, and the Sinai Peninsula, and these or dogs very similar are found in Egypt, Iraq, and Syria. It is the national dog of Israel. As of 2012, there were 2,000 to 3,000 Canaan Dogs across the world, mostly in Europe and North America.", title: "Canaan Dog" }
    },
    {
        id: "n108",
        type: "note-video",
        info: { url: "https://www.youtube.com/embed/N9wsjroVlu8", title: "Break something" },
        style: { backgroundColor: "#b22222" }
    },
    {
        id: "n104",
        type: "note-img",
        info: { url:"https://www.burger-il.com/wp-content/uploads/2021/01/%D7%A6%D7%90%D7%A4%D7%95-%D7%A8%D7%9E%D7%AA-%D7%92%D7%9F-3-420x420.jpg" , title: "Breakfast" },
        style: { backgroundColor: "#000000" }
    },
    {
        id: "n107",
        type: "note-img",
        info: { url: "https://images.fineartamerica.com/images-medium-large-5/tropical-sandy-beach-with-coconut-trees-apomares.jpg", title: "My next trip" },
        style: { backgroundColor: "#000000" }
    },

    {
        id: "n103",
        type: "note-txt",
        isPinned: true,
        info: { txt: "A chopper is a type of custom motorcycle which emerged in California in the late 1950s. A chopper employs radically modified steering angles and lengthened forks for a stretched-out appearance.A chopper is a type of custom motorcycle which emerged in California in the late 1950s. A chopper employs radically modified steering angles and lengthened forks for a stretched-out appearance.", title: "zed is dead" }
    },
    {
        id: "n120",
        type: "note-video",
        info: { url: "https://www.youtube.com/embed/OrzgxUhnYjY", title: "I know React..." },
        style: { backgroundColor: "#b22222" }
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

function embedVideo(videoLink) {
    let fixedLink = videoLink.split('?v=')
    return `https://www.youtube.com/embed/${fixedLink[1]}`
}

function deleteKeep(keepId) {
    let noteIdx = getKeepById(keepId)
    notes.splice(noteIdx, 1);
    _saveNotesToStorage()
    return Promise.resolve()
}

function addKeep(newKeep) {
    notes.push(newKeep);
    _saveNotesToStorage(KEY, notes);
}

function _saveNotesToStorage() {
    storageService.saveToStorage(KEY, notes)
}

_saveNotesToStorage();

