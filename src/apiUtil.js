export const getData = async () => {
  console.log("line 2")
  let responseObj
  await fetch("http://localhost:8080/scraper")
    .then((response) => {
      const json = response.json()
      return json
    })
    .then((data) => {
      responseObj = data
    })
    .catch((err) => console.error(err))
  return responseObj
}
