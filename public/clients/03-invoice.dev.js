"use strict";

//Get the id from the client in the URL
var url_string = window.location.href;
var url = new URL(url_string);
var clientId = url.searchParams.get('clientId');

function redirectNewInvoice() {
  try {
    window.location.href = "./04-newInvoice.html?clientId=".concat(clientId);
  } catch (error) {
    console.error(error);
  }
}

function renderInvoices() {
  var invoicesInfo;
  return regeneratorRuntime.async(function renderInvoices$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(axios.get("/invoices/allInvoices"));

        case 3:
          invoicesInfo = _context.sent;
          console.log(invoicesInfo.data);
          html = invoicesInfo.data.invoices.map(function (element) {
            if (element.customer_id === clientId) {
              return "<div class=\"client__item__wrapper\">\n                      <div>Customer name: <b>".concat(element.customer_name, " </b></div>            \n                      <div>Date: <b>").concat(element.date, " </b></div>\n                      <div>Total: <b>").concat(element.currency_symbol + element.total, " </b></div>\n                  </div>");
            }
          }).join('');

          if (html.trim() == '') {
            html = "<h1> Nothing to show </h1>";
          }

          root.innerHTML = html;
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
}