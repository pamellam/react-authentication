
// extractin the token from the local storage
export function getAuthToken() {
  const token = localStorage.getItem('token');
  return token;
}

