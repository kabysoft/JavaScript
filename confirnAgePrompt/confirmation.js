function confirm(params) {
  let age =   prompt('How Old Are You :?')
  alert('THis is Good You HAve ' + age);
    
}
confirm();

function concat(params) {
    let futurAge =   prompt('How Old Are you : ?');
    alert('you will have ' + (futurAge+1) +' Next Year');
     // This COncatination give ass as a result 301 
  }
concat();

function concat1(params) {
    let futurAge =   prompt('How Old Are you : ?');
    let nextAge = parseInt(futurAge)
    alert('you will have ' + (nextAge+1) +' Next Year');
     /* This COncatination give ass as a result 31 
     also we can do this concatination width the function Number()
     let nextAge = Number(futurAge);*/
    }
concat1();