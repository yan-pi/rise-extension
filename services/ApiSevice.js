class ApiService {
  async registerUser(endpoint, userData) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) throw new Error("API call failed");
      return await response.json();
    } catch (error) {
      console.error("API error:", error);
      throw error;
    }
  }
}
