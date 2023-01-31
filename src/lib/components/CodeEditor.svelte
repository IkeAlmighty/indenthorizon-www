<script>
	import { onMount } from "svelte";


  export let code;

  function doKeyPress(e) {
    
  }


</script>


<div 
class="codearea" 
contenteditable 
bind:innerHTML={code}
on:keypress={doKeyPress}
></div>

<style>
  @font-face {
    font-family: 'FiraCode';
    font-style: normal;
    src: url('/fonts/FiraCode-Regular.ttf')
  }
  .codearea{
    display: block;
    margin: 1px 0;
    width: 500px;
    height: 500px;
    padding: 1rem;
    border: 1px solid;
    font-family: FiraCode;
  }
</style>