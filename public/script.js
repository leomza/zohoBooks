const login = document.querySelector('#login')
login.addEventListener('click', generateToken)

async function generateToken () {
  try {
    window.location.href = `https://accounts.zoho.eu/oauth/v2/auth?scope=ZohoBooks.fullaccess.all&client_id=1000.GIID9O47RCNRREJG0VPRKKAI04IH9D&state=Testing&response_type=code&redirect_uri=http://localhost:3000/users/auth`;
  } catch (error) {
    console.error(error)
  }
}
