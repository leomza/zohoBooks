"use strict";

var login = document.querySelector('#login');
login.addEventListener('click', generateToken);

function generateToken() {
  return regeneratorRuntime.async(function generateToken$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          try {
            window.location.href = "https://accounts.zoho.eu/oauth/v2/auth?scope=ZohoBooks.fullaccess.all&client_id=1000.GIID9O47RCNRREJG0VPRKKAI04IH9D&state=Testing&response_type=code&redirect_uri=http://localhost:3000/users/auth";
          } catch (error) {
            console.error(error);
          }

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}