const form = document.querySelector("#form-setup")
const setup = new NLWSetup(form)
const registerAction = document.querySelector("header button")

registerAction.addEventListener("click", () => {
  let date = new Date()
  let today = date.toLocaleDateString("pt-br").slice("5, 8")
  let dayExist = setup.dayExists(today)

  if (dayExist) {
    alert("O dia existe")
    return
  }

  setup.addDay(today)
})

form.addEventListener("change", () => {
  localStorage.setItem("Setup", JSON.stringify(setup.data))
})

const data = JSON.parse(localStorage.getItem("Setup")) || {}
setup.setData(data)
setup.load()
