$(function() {

  const BUTTON = $("#btn");

  const URL = "./days.php";
  const METHOD = "GET";

  const TARGET = $("#target");


  async function askDayPostCall(param, url, method) {

    $.ajax({
      type: method,
      url: url,
      data: {
        jour: param,
      },
      dataType: 'json',
      statusCode: {
          404: () => {
          showError($error_404_message);
          console.log($error_404_message);
      }
      },
      success: (result) => {
        console.log(result);
        TARGET.append('<tr><td>' + result + '</td></tr>');
      },
      error: (data, status, error) => {
          showError($error_message_displayed);
          console.error(data);
          console.error(error, status);
      },
      timeout: 2000
  });
}

  function askDay(e) {
    e.preventDefault();
    const PARAM = $("#input").val();
    console.info(PARAM);
    askDayPostCall(PARAM, URL, METHOD);
  }

  BUTTON.on("click", askDay);


})
