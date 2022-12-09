function selectYear(){
  var d=new Date();
  var currentYear=d.getFullYear();
  var str="<option value='0'>Year</option>";

  for(var i=0;i<10;i++){
    str+="<option value="+parseInt(currentYear+i)+">"+parseInt(currentYear+i)+"</option>";
  }
  document.getElementById('Yearselection').Timecard.html=str;
}



