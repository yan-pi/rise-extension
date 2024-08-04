class StorageService {
  async storeUser(siteId, userData) {
    return new Promise((resolve, reject) => {
      chrome.storage.local.get("registeredUsers", (result) => {
        const registeredUsers = result.registeredUsers || {};
        if (!registeredUsers[siteId]) registeredUsers[siteId] = [];
        registeredUsers[siteId].push(userData);
        chrome.storage.local.set({ registeredUsers }, resolve);
      });
    });
  }

  async getUsers(siteId) {
    return new Promise((resolve) => {
      chrome.storage.local.get("registeredUsers", (result) => {
        const registeredUsers = result.registeredUsers || {};
        resolve(registeredUsers[siteId] || []);
      });
    });
  }
}
