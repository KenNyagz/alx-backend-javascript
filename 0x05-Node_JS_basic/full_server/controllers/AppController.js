
class AppController() {
  static
  function getHomePage(request, response) {
    response.statusCode = 200;
    response.send("Hello Holberton School");
  }
}
