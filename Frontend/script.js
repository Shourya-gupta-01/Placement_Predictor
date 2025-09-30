function proceedToForm() {
  const name = document.getElementById("name").value.trim()

  if (!name) {
    alert("Please enter your name to continue!")
    return
  }

  // Hide name section and show form section
  document.getElementById("nameSection").classList.remove("active")
  document.getElementById("formSection").classList.add("active")

  // Update subtitle to include name
  document.querySelector(".subtitle").textContent = `Welcome ${name}! Let's predict your placement`
}

async function predictPlacement() {
  // Get all input values
  const iq = Number.parseInt(document.getElementById("iq").value)
  const cgpa = Number.parseFloat(document.getElementById("cgpa").value)
  const lst_sgpa = Number.parseFloat(document.getElementById("lst_sgpa").value)
  const communication_skill = Number.parseFloat(document.getElementById("communication_skill").value)

  const response = await fetch("http://127.0.0.1:8000/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      iq: iq,
      cgpa: cgpa,
      lst_sgpa: lst_sgpa,
      communication_skill: communication_skill
    })
  });

  const data = await response.json();

  showPopup(data['Prediction']==='Yes')
}

function showPopup(isPlaced) {
  const name = document.getElementById("name").value.trim()
  const popup = document.getElementById("popup")
  const popupContent = document.getElementById("popupContent")
  const title = document.getElementById("popupTitle")
  const message = document.getElementById("popupMessage")

  if (isPlaced) {
    title.textContent = `🎉 Congratulations ${name}!`
    message.textContent = "Congratulations, You are Placed!"
    popupContent.classList.add("success")
    popupContent.classList.remove("failure")
  } else {
    title.textContent = `💪 Keep trying ${name}!`
    message.textContent = "Work hard better chances coming up."
    popupContent.classList.add("failure")
    popupContent.classList.remove("success")
  }

  popup.style.display = "flex"
}

function closePopup() {
  document.getElementById("popup").style.display = "none"
}

// Close popup when clicking outside
document.getElementById("popup").addEventListener("click", function (e) {
  if (e.target === this) {
    closePopup()
  }
})

// Add enter key support
document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const nameSection = document.getElementById("nameSection")
    const formSection = document.getElementById("formSection")

    if (nameSection.classList.contains("active")) {
      proceedToForm()
    } else if (formSection.classList.contains("active")) {
      predictPlacement()
    }
  }
})
