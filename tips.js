function calculateTip() {
  //get values of input
  let billAmount = document.querySelector("#bill-amt").value;
  let serviceQuality = document.querySelector("#service-quality").value;
  let numOfPeople = document.querySelector("#ppl-amt").value;

  //calculate tip
  let tip = (billAmount * serviceQuality) / numOfPeople;
  tip = Math.floor(tip * 100) / 100;
  tip = tip.toFixed(2);
  let totalTips = document.querySelector(".total-tip-amt");

  //display 'per person' if numOfPeople more than 1
  if (numOfPeople > 1) {
    totalTips.innerHTML = tip + " per person";
  } else {
    totalTips.innerHTML = tip;
  }
  document.querySelector("#total-tip-toggle").style.display = "";
}

//hide 'tip amount' when page loads
document.querySelector("#total-tip-toggle").style.display = "none";

document.querySelector("#calculate").onclick = function() {
  calculateTip();
};
