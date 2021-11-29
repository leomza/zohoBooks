async function renderClients () {
  try {
    const clientsInfo = await axios.get(`/clients/allClients`)
    console.log(clientsInfo.data.contacts)

    html = clientsInfo.data.contacts
      .map(element => {
        return `<button class="client__item__wrapper" onclick='showClientInfo("${element.contact_id}" )'>
                    <div>Company name: <b>${element.company_name.toUpperCase()} </b></div>
                    <div>Contact name: <b>${element.contact_name.toUpperCase()} </b></div>
                </button>`
      })
      .join('')
    root.innerHTML = html
  } catch (error) {
    console.error(error)
  }
}

function showClientInfo (clientId) {
  window.location.href = `./03-invoice.html?clientId=${clientId}`;
}