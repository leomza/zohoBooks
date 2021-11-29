//Get the id from the client in the URL
const url_string = window.location.href
const url = new URL(url_string)
const clientId = url.searchParams.get('clientId')

function redirectNewInvoice () {
  try {
    window.location.href = `./04-newInvoice.html?clientId=${clientId}`
  } catch (error) {
    console.error(error)
  }
}

async function renderInvoices () {
  try {
    const invoicesInfo = await axios.get(`/invoices/allInvoices`)
console.log(invoicesInfo.data);

    html = invoicesInfo.data.invoices
      .map(element => {
        if (element.customer_id === clientId) {
          return `<div class="client__item__wrapper">
                      <div>Customer name: <b>${element.customer_name} </b></div>            
                      <div>Date: <b>${element.date} </b></div>
                      <div>Total: <b>${element.currency_symbol+element.total} </b></div>
                  </div>`
        }
      })
      .join('')
    root.innerHTML = html
  } catch (error) {
    console.error(error)
  }
}
