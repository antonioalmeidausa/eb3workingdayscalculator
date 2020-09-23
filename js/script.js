let currentDate = new Date();
document.getElementById('actualDate').innerHTML += ' ' + currentDate.toLocaleDateString();

document.getElementById('alert').innerHTML = `This is only an estimate, each case is different!`;


document.getElementById('input').addEventListener('input', transformDate);

function transformDate () {
    var input = this.value;
    var dateEntered = new Date (input);

    var startDate = dateEntered;

    let currentDate = new Date();
    let leaveDate = new Date(startDate.getTime() + (86400000 * 365));
    let daysWorking = ((currentDate - startDate) / 86400000).toFixed();
    let daysToWork = ((leaveDate.getTime() - currentDate.getTime()) / 86400000).toFixed();

    document.getElementById('firstDay').innerHTML = 'Your first day: ' + startDate.toLocaleDateString('en-US', {timeZone: 'UTC'});
    if (daysWorking >= 100) {
        document.getElementById('actualDateText').innerHTML = `It has been ${daysWorking} days since you have started working for your sponsor. Congratulations!!`;
    } else {
        document.getElementById('actualDateText').innerHTML = `It has been ${daysWorking} days since you have started working for your sponsor. Good job! Keep going!`;
    }
    document.getElementById('lastDay').innerHTML = 'Estimate to finish your contract: ' + leaveDate.toLocaleDateString('en-US', {timeZone: 'UTC'}); 
    if (daysToWork >= 265) {
        document.getElementById('lastDayText').innerHTML = `You still have ${daysToWork} more days to go. Keep going.`;   
    } else {
        document.getElementById('lastDayText').innerHTML = `You still have ${daysToWork} more days to go. You are almost there. Keep going.`;   
    }

   

};

document.getElementById('clearDate').onclick = function () {
    document.getElementById('input').value = '';

    document.getElementById('firstDay').innerHTML = '';   
    document.getElementById('actualDateText').innerHTML = '';
    document.getElementById('lastDay').innerHTML = '';
    document.getElementById('lastDayText').innerHTML = '';

}








