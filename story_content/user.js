function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6I8n2cNBsZd":
        Script1();
        break;
      case "6eMuznhD6HM":
        Script2();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbxz9rE4YwqtCJUYAWpYAn4u2-Hl6yrFRaoLkdg_rEJlFzIh7yXOIwYIwn4kygw3mV7v/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

function Script2()
{
  const url="https://script.google.com/macros/s/AKfycbxz9rE4YwqtCJUYAWpYAn4u2-Hl6yrFRaoLkdg_rEJlFzIh7yXOIwYIwn4kygw3mV7v/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

