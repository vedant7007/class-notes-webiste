const notesList = document.getElementById('notes-list');

// Example: Manually add links to your notes here
const notes = [
    { name: 'Math Notes - 31-08-2024', link: 'https://drive.google.com/drive/folders/14CKS0bfDHXANqTISQyxP5ssKHvu-zJNC?usp=sharing' },
    { name: 'Chemistry Notes - 31-08-2024', link: 'https://drive.google.com/drive/folders/14CKS0bfDHXANqTISQyxP5ssKHvu-zJNC?usp=sharing' },
    { name : 'BEE Notes -  31-08-2024' , link: 'https://drive.google.com/drive/folders/14CKS0bfDHXANqTISQyxP5ssKHvu-zJNC?usp=sharing'},
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
