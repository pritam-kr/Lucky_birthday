const birthDate = document.querySelector("#date");
const luckynumber = document.querySelector("#lucky-number");
const btnCheck = document.querySelector(".btn-check");
const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const dateString = date.value.split("-").join("");
  console.log(dateString);

  let sum = 0;
  for (eachString of dateString) {
    sum = sum + Number(eachString);
    // console.log(sum);

    const luckyNumberValue = Number(luckynumber.value);
    // console.log(luckyNumberValue)

    if (sum % luckyNumberValue === 0) {
      // console.log(sum % luckyNumberValue);
      var lucky = "";
      lucky = `
                
                        <div class="you-lucky">
                            <img src="lucky.png">
                            <h3>Wow! your are a lucky person....🎂</h3>
                        </div>

                `;
      document.querySelector(".output").innerHTML = lucky;
    } else {
      var unLucky = "";

      unLucky = `<div class="you-lucky">
                         <img src="unlucky.png">
                         <h3>Sorry! your are not a lucky person....😔 </h3>
                      </div>
                     `;

      document.querySelector(".output").innerHTML = unLucky;
    }
  }
});
