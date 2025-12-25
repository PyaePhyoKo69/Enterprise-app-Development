// js/donation.js

document.addEventListener("DOMContentLoaded", () => {

  /* ==========================
     DONATION FORM LOGIC
     ========================== */

  const donationForm = document.querySelector(".donation-form");
  if (donationForm) {

    let selectedAmount = null;

    // Handle donation card click
    document.querySelectorAll(".donation-card input").forEach(radio => {
      radio.addEventListener("change", () => {
        const priceText = radio.closest(".donation-card")
          .querySelector(".price").innerText;

        selectedAmount = priceText.replace("$", "");
        document.getElementById("custom_amount").value = "";
      });
    });

    donationForm.addEventListener("submit", e => {
      e.preventDefault();

      const customAmount = document.getElementById("custom_amount").value;

      const donationData = {
        donation_plan: donationForm.donation_plan?.value || null,
        amount: customAmount || selectedAmount
      };

      if (!donationData.amount) {
        alert("Please select a donation plan or enter an amount.");
        return;
      }

      // TESTING
      console.log("Donation data:", donationData);
      alert("Thank you for your donation!");

      donationForm.reset();
      selectedAmount = null;

      // REAL BACKEND 
      /*
      fetch("/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(donationData)
      })
      .then(res => res.json())
      .then(data => console.log("Server response:", data))
      .catch(err => console.error(err));
      */
    });
  }

  /* ==========================
     PARTNER FORM LOGIC
     ========================== */

  const partnerForm = document.querySelector(".partner-form");
  if (partnerForm) {
    partnerForm.addEventListener("submit", e => {
      e.preventDefault();

      const formData = new FormData(partnerForm);
      const data = Object.fromEntries(formData.entries());

      // ✅ TESTING
      console.log("Partner registration:", data);
      alert("Thanks for partnering with MerryMeal!");

      partnerForm.reset();

      // REAL BACKEND 
      /*
      fetch("/partner/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(resData => console.log(resData))
      .catch(err => console.error(err));
      */
    });
  }

});
