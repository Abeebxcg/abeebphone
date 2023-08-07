back = () => {
  window.location.href = "phone.html";
};

function getDate() {
  const time1 = new Date();
  //console.log(date.getUTCDate());
  let time2 = time1.toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
  //console.log(newDate);
  dis.innerHTML = `${time2}`;
}