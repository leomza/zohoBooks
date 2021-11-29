//Get the id from the client in the URL
const url_string = window.location.href
const url = new URL(url_string)
const clientId = url.searchParams.get('clientId')

function redirectInvoice () {
  try {
    window.location.href = `./03-invoice.html?clientId=${clientId}`
  } catch (error) {
    console.error(error)
  }
}

//Handle the form to create a new client:
const handleFormCreate = document.querySelector('#formInvoice')
handleFormCreate.addEventListener('submit', doingSubmitCreate)

async function doingSubmitCreate (ev) {
  try {
    ev.preventDefault()
    let { description, total } = ev.target.elements
    description = description.value
    total = total.value
    if (!description || !total)
      throw new Error('Please complete all the fields')
    ev.target.reset()
    const invoiceDetails = { clientId, description, total }
    await axios.post('/invoices/create', invoiceDetails)
    swal('Iuuujuu!', 'Invoice created successfully', 'success')
  } catch (error) {
    swal('Ohhh no!', error.response.data, 'warning')
    console.error(error)
  }
}
