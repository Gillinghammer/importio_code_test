export default {
  fetchImportData(json_api) {
    console.log("API url", json_api)
    $.get(json_api)
    .success(data => {
      console.log(data.results)
    })
    .error(error => console.log(error));
  }
}