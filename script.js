const api_endpoint = "https://twitter-trends-daily.herokuapp.com/";

async function GetAPI(url) {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);

  if (response) {
    document.getElementById('loading').style.display = 'none';
  }
  show(data);
}

GetAPI(api_endpoint);

function show(data) {
  let tab =
    `<tr>
  <th>#</th>
  <th>Trend Name</th>
  <th>Positive</th>
  <th>Negative</th> 
  </tr>
  `;

  for (let trend of data.top_trends) {
    tab += `<tr>
    <td>${trend.name}</td>
    <td>${trend.positive}</td>
    <td>${trend.negative}</td>
    </tr>`;
  }

  document.getElementById("TrendsTable")


}