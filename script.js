// Sample data (replace with your own)
const RESULTS = [
  { seat:'B24110006050', name:'Hasnain Ahmed', midterm:72, rank:3 },
  { seat:'B24110006051', name:'Hasnain Saboor', midterm:85, rank:1 },
  { seat:'B24110006052', name:'Usman Tariq', midterm:65, rank:2 }
];

const seatInput = document.getElementById('seatInput');
const searchBtn = document.getElementById('searchBtn');
const notFound = document.getElementById('notFound');
const result = document.getElementById('result');
const studentName = document.getElementById('studentName');
const midMarks = document.getElementById('midMarks');
const rank = document.getElementById('rank');

function findBySeat(seat){
  const query = seat.trim().toLowerCase();
  return RESULTS.find(r => r.seat.toLowerCase() === query) || null;
}

function handleSearch(){
  const rec = findBySeat(seatInput.value);
  if(rec){
    studentName.textContent = rec.name;
    midMarks.textContent = rec.midterm;
    rank.textContent = rec.rank;
    notFound.style.display = 'none';
    result.style.display = 'block';
  } else {
    result.style.display = 'none';
    notFound.style.display = 'block';
  }
}

searchBtn.addEventListener('click', handleSearch);
seatInput.addEventListener('keydown', e=>{ if(e.key==='Enter') handleSearch(); });
