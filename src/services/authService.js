// src/services/authService.js

export default {
    login(email, password) {
      // Versioni i thjeshtë: kontrolle hardcoded (mund të zëvendësohet me API më vonë)
      return email === 'user@test.com' && password === '1234';
    }
  };
  