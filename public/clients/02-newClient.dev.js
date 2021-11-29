"use strict";

//Handle the form to create a new client:
var handleFormCreate = document.querySelector('#formClient');
handleFormCreate.addEventListener('submit', doingSubmitCreate);

function doingSubmitCreate(ev) {
  var _ev$target$elements, contactName, companyName, clientDetails;

  return regeneratorRuntime.async(function doingSubmitCreate$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          ev.preventDefault();
          _ev$target$elements = ev.target.elements, contactName = _ev$target$elements.contactName, companyName = _ev$target$elements.companyName;
          contactName = contactName.value;
          companyName = companyName.value;

          if (!(!contactName || !companyName)) {
            _context.next = 7;
            break;
          }

          throw new Error('Please complete all the fields');

        case 7:
          ev.target.reset();
          clientDetails = {
            contactName: contactName,
            companyName: companyName
          };
          _context.next = 11;
          return regeneratorRuntime.awrap(axios.post('/clients/create', clientDetails));

        case 11:
          swal('Iuuujuu!', 'Client created successfully', 'success');
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