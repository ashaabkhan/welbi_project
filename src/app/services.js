export const getRequest = async (url) => {
  const authToken = localStorage.getItem("authToken");

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
    });
    console.log("testing success");

    return await response.json();
  } catch (error) {
    console.error("GET Error:", error);
    throw error;
  }
};

export const postRequest = async (url, data) => {
  const authToken = localStorage.getItem("authToken");

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log("testing success");
    return await response.json();
  } catch (error) {
    console.error("POST Error:", error);
    throw error;
  }
};

const getAuthToken = async () => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const data = await response.json();
    const token = data.token;
    console.log("Authentication Token:", token);
    localStorage.setItem("authToken", token);
    return token;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};
