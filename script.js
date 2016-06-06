var modalOutput;
function checkDisease() {
  var count = 0;
  var inputArr = ["muscle aches", "nauseated", "fatigue"];
  if (document.getElementById("fever").checked = true) {
    count ++;
    inputArr.push("fever");
  }
  if (document.getElementById("diarrhoea").checked = true) {
    count ++;
    inputArr.push("diarrhoea");
  }
  if (document.getElementById("fatigue").checked = true) {
    count ++;
    inputArr.push("fatigue");
  }
  if (document.getElementById("muscle aches").checked = true) {
    count ++;
    inputArr.push("muscle aches");
  }
  if (document.getElementById("coughing").checked = true) {
    count ++;
    inputArr.push("coughing");
  }
  if (document.getElementById("nauseated").checked = true) {
    count ++;
    inputArr.push("nauseated");
  }
  var sortedArr = inputArr.sort();
  var joinedWithSpaces = sortedArr.join(' ');
  var arrayOfDiseaseSym = ['fatigue muscle aches nauseated', 'fatigue fever muscle aches', 'coughing diarrhoea fever', 'coughing fatigue fever', 'diarrhoea fever nauseated', 'coughing fatigue muscle aches', 'diarrhoea fatigue muscle aches', 'diarrhoea muscle aches nauseated', 'coughing fever muscle aches', 'diarrhoea fever muscle aches'];
  var diseases = ['herpes', 'erectile dysfunction', 'ebola', 'flu', 'gastroesophageal reflux disease', 'allergies', 'cancer', 'gonorrhoea', 'gout', 'diabetes'];
  var index = arrayOfDiseaseSym.indexOf(joinedWithSpaces);
  var disease;
  if (index === -1) {
    disease = 'a serious problem, go see a doctor!';
  } else {
    disease = diseases[index];
  }
  if (count !== 3) {
    modalOutput = "Please select only three symptoms"
  } else {
    modalOutput = "You have " + disease;
  };
};
