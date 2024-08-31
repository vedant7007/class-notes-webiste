const notesList = document.getElementById('notes-list');

// Example: Manually add links to your notes here
const notes = [
    { name: 'Math Notes - 2024-01-01', link: 'https://example.com/note1.pdf' },
    { name: 'Physics Notes - 2024-01-02', link: 'https://example.com/note2.pdf' },
];

notes.forEach(note => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = note.link;
    a.textContent = note.name;
    a.target = '_blank';
    li.appendChild(a);
    notesList.appendChild(li);
});

document.getElementById('upload-button').addEventListener('click', () => {
    alert('To upload files, manually add them to your website’s directory.');
});
