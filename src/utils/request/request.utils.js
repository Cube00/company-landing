export const apiCall = async (method, endpoint, body = null) => {
  try {
    let request = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : null,
    }

    const response = await fetch(`https://test-task-api-optimo.herokuapp.com`+ endpoint, request);

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();

    return result;
  } catch (err) {
    console.log(err);
  }
}
