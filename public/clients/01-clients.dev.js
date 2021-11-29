"use strict";

function renderClients() {
  var clientsInfo;
  return regeneratorRuntime.async(function renderClients$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(axios.get("/clients/allClients"));

        case 3:
          clientsInfo = _context.sent;
          console.log(clientsInfo.data.contacts);
          html = clientsInfo.data.contacts.map(function (element) {
            return "<button class=\"client__item__wrapper\" onclick='showClientInfo(\"".concat(element.contact_id, "\" )'>\n                    <div>Company name: <b>").concat(element.company_name.toUpperCase(), " </b></div>\n                    <div>Contact name: <b>").concat(element.contact_name.toUpperCase(), " </b></div>\n                </button>");
          }).join('');
          root.innerHTML = html;
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
}

function showClientInfo(clientId) {
  window.location.href = "./03-invoice.html?clientId=".concat(clientId);
}