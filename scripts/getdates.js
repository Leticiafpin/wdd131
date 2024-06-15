const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

const lastModificationDate = new Date(document.lastModified);


const formattedDate = `${lastModificationDate.getMonth() + 1}/${lastModificationDate.getDate()}/${lastModificationDate.getFullYear()}`;


document.getElementById("lastModified").textContent = `Last modified: ${formattedDate}`;
