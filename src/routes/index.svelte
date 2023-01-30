


<div><h1>Welcome to Indent Horizon.</h1></div>

<div class="container">
<input type="text" placeholder="Ship Name"/>
  <textarea></textarea>
  <div id="deploy-container"><button id="deploy-button">Deploy Program</button></div>
  <div>
    <select>
      <option>Ship Program 1 (NOT NAMED)</option>
      <option>Ship Program 2 (NOT NAMED)</option>
      <option>Ship Program 3 (NOT NAMED)</option>
      <option>Ship Program 4 (NOT NAMED)</option>
      <option>Ship Program 5 (NOT NAMED)</option>
    </select>
    <button id="buy-ship-button">Buy Another Ship >>></button>
  </div>
</div>

<div id="info-container">
  <div class="infopanel"><span class="data-value">0</span>$</div>
  <div class="infopanel"><span class="data-value">0</span>Planets Discovered</div>
  <div class="infopanel"><span class="data-value">0</span>Running Ships</div>
  <div class="infopanel"><span class="data-value">0</span>Research Results</div>
</div>

<div class="container">
  <select>
    <option selected>Mainframe (Global Chat)</option>
    <option>Program 1 Output</option>
  </select>
  <div>
    <iframe 
      src="https://www.twitch.tv/embed/indenthorizon/chat?parent=localhost,indenthorizon.com"
      height="500"
      width="500"
      title="Global Chat">
    </iframe>
  </div>
</div>

<style>

  textarea {
    display: block;
    margin: 1px 0;
    width: 500px;
    height: 500px;
    padding: 1rem;
  }

  textarea {
    display: inline-block;
  }

  input, option, select {
    display: block;
    padding: 0.5rem;
  }

  .container {
    display: inline-block;
    vertical-align: top;
  }

  #info-container {
    display: inline-block;
    vertical-align: top;
    width: 300px;
    padding: 2.5rem;
    margin: 0;
  }

  .infopanel {
    margin: 0.5rem;
  }

  .data-value {
    margin: 0 1rem;
    color:royalblue;
  }


  #deploy-button {
    padding: 1rem;
    font-size: 1.5rem;
    float: right;
    transform: translate(1rem, -1rem);
    border-radius: 4px;
    font-family: fantasy;
    background-color: rgb(106, 195, 255);
    cursor:pointer;
  }

  #deploy-container {
    width: 100%;
  }

  #buy-ship-button {
    padding: 0.5rem;
    margin: 0.5rem 0;
    background-color:rgb(255, 208, 0);
    font-style: italic;
    cursor: pointer;
    border-radius: 1rem;
  }
</style>