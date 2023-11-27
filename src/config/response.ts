export const handleResponse = (data) => {
  if (Array.isArray(data)) {
    return {
      messages: [],
      data: {
        result: data[0],
        total: data[1],
      }
    }
  }

}