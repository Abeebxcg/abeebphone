calc = () => {
  window.location.href = "newcalc.html";
};

console.log("i am working");

function getDate() {
  const time1 = new Date();
  //console.log(date.getUTCDate());
  let time2 = time1.toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
  //console.log(newDate);
  dis.innerHTML = `${time2}`;
}

todo = () => {
  window.location.href = "todo.html";
};

CALL = () => {
  window.location.href = "CONTACT.html";
};
facebook = () => {
  window.location.href = "fb.html";
};
