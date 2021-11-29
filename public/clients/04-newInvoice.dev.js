"use strict";

//Get the id from the client in the URL
var url_string = window.location.href;
var url = new URL(url_string);
var clientId = url.searchParams.get('clientId');

function redirectInvoice() {
  try {
    window.location.href = "./03-invoice.html?clientId=".concat(clientId);
  } catch (error) {
    console.error(error);
  }
} //Handle the form to create a new client:


var handleFormCreate = document.querySelector('#formInvoice');
handleFormCreate.addEventListener('submit', doingSubmitCreate);

function doingSubmitCreate(ev) {
  var _ev$target$elements, description, total, invoiceDetails;

  return regeneratorRuntime.async(function doingSubmitCreate$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          ev.preventDefault();
          _ev$target$elements = ev.target.elements, description = _ev$target$elements.description, total = _ev$target$elements.total;
          description = description.value;
          total = total.value;

          if (!(!description || !total)) {
            _context.next = 7;
            break;
          }

          throw new Error('Please complete all the fields');

        case 7:
          ev.target.reset();
          invoiceDetails = {
            clientId: clientId,
            description: description,
            total: total
          };
          _context.next = 11;
          return regeneratorRuntime.awrap(axios.post('/invoices/create', invoiceDetails));

        case 11:
          swal('Iuuujuu!', 'Invoice created successfully', 'success');
          _context.next = 18;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](0);
          swal('Ohhh no!', _context.t0.response.data, 'warning');
          console.error(_context.t0);

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 14]]);
}