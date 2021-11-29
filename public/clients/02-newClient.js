//Handle the form to create a new client:
const handleFormCreate = document.querySelector('#formClient')
handleFormCreate.addEventListener('submit', doingSubmitCreate)

async function doingSubmitCreate (ev) {
  try {
    ev.preventDefault()
    let { contactName, companyName } = ev.target.elements
    contactName = contactName.value
    companyName = companyName.value
    if (!contactName || !companyName)
      throw new Error('Please complete all the fields')
    ev.target.reset()
    const clientDetails = { contactName, companyName }
    await axios.post('/clients/create', clientDetails)
    swal('Iuuujuu!', 'Client created successfully', 'success')
  } catch (error) {
    swal('Ohhh no!', error.response.data, 'warning')
    console.error(error)
  }
}
