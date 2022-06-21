export const requestFunc = async (method, url, body = null) => {
  try {
    let request = {
      method: method,
      mode: 'cors',
      headers: {
        'X-PINGOTHER': 'pingpong',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': `https://test-task-api-optimo.herokuapp.com`,
        'credentials': "include"
      },
      body: body ? JSON.stringify(body) : null,
    }

    console.log(request)

    const response = await fetch(url, request);

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }else {
      console.log(response.status)
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}
