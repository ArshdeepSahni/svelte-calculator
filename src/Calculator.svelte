<script>
  export let Class = "";
  export let size = "100";
  export let calculatorBackground = "";
  export let inputBackground = "";
  let width = "25";
  let zeroButtonWidth = (parseFloat(width) / 2.43).toString();
  export let normalKeyColor = "";
  export let operatorKeyColor = "";
  export let animation = true;
  $: opr = "";
  $: str = "0";
  $: result = "";
  $: str2 = "0";
  let random = async () => {
    if (animation) {
      console.log(8888 - 888);
      for (let i = 99999; i >= 0; i = i - 3) {
        setTimeout(() => {
          result = i;
        }, 1000);
      }
      setTimeout(() => {
        result = "";
      }, 1000);
    }
  };
  window.onload = random();
  let otherkeys = (key) => {
    if (key == "+/-") {
      if (result.length > 0) {
        !result.includes("-")
          ? (result = "-" + result)
          : (result = result.replace("-", ""));
        str = parseFloat(-str).toString();
      }
    }
    if (key == "%") {
      str = parseFloat(str / 100).toString();
      result = str;
    }
    if (key == ".") {
      if (str.length < 1) {
        str = str + "0.";
        result = str;
      }
      if (!result.includes(".")) {
        str = str + ".";
        result = str;
      }
    }
  };
  let calculate = (opreator) => {
    if (str2[0] == "0") {
      str2 = str2.substring(1);
    }
    console.log(str2, str, opreator);
    // result = eval(str2 + opreator + str);
    if (opreator == "+") {
      result = str2 + str;
    }
    if (opreator == "-") {
      result = str2 - str;
    }
    if (opreator == "*") {
      result = str2 * str;
    }
    if (opreator == "/") {
      result = str2 / str;
    }
    return result;
  };

  let clear = () => {
    random();
    result = "";
    str = "";
    opr = "";
  };
  let normalkeys = (key) => {
    result = result + key;
    str = str + key;
  };
  let oper = (opt) => {
    opr = opt;
    str2 = str;
    str = "";
    result = str;
  };
</script>

<svelte:head>
  <link
    href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
    rel="stylesheet"
  />
</svelte:head>
<main class="overflow-hidden h-screen flex flex-col justify-center">
  <div class="flex overflow-hidden flex-col justify-center my-auto h-min">
    <div
      class={`${Class} w-max flex p-4 transform scale-${size} border rounded-3xl flex-col mx-auto`}
      style={"background:" + calculatorBackground}
    >
      <div class="py-2 overflow-hidden">
        <input
          disabled
          pattern="[0-9]"
          type=""
          class={`disabled text-7xl font-light px-4 rounded-full shadow-inner bg-gray-200`}
          placeholder="0"
          bind:value={result}
          style={"width:" +
            width +
            "rem;" +
            "background:" +
            inputBackground +
            ";"}
        />
      </div>
      <div class={`flex justify-between`}>
        <div class="px-4 py-2">
          <button
            on:click={() => clear()}
            class={`focus:border-4 focus:border-black border-2 hover:scale-90 transform rounded-full shadow-inner  h-16 w-16 font-light text-2xl ${Class} bg-gray-200 text-gray-400`}
            style={result[result.length - 1] == ""
              ? ""
              : "background:" + operatorKeyColor}>AC</button
          >
        </div>
        <div class="px-4 py-2">
          <button
            on:click={() => otherkeys("+/-")}
            class={`focus:border-4 focus:border-black border-2 hover:scale-90 transform rounded-full shadow-inner  h-16 w-16 font-light text-2xl ${Class} bg-gray-200 text-gray-400`}
            style={result[result.length - 1] == ""
              ? `background:${operatorKeyColor}`
              : `background:${operatorKeyColor}`}>±</button
          >
        </div>
        <div class="px-4 py-2">
          <button
            on:click={() => otherkeys("%")}
            class={`focus:border-4 focus:border-black border-2 hover:scale-90 transform rounded-full shadow-inner  h-16 w-16 font-light text-2xl ${Class} bg-gray-200 text-gray-400`}
            style={result[result.length - 1] == ""
              ? `background:${operatorKeyColor}`
              : `background:${operatorKeyColor}`}>%</button
          >
        </div>
        <div class="px-4 py-2 border-l">
          <button
            on:click={() => oper("/")}
            class={`focus:border-4 focus:border-black border-2 hover:scale-90 transform rounded-full shadow-inner  h-16 w-16 font-light text-2xl ${Class} bg-gray-200 text-gray-400`}
            style={`background:${operatorKeyColor}`}>÷</button
          >
        </div>
      </div>
      <hr />
      <div class="flex justify-between">
        <div class="px-4 py-2">
          <button
            on:click={() => normalkeys("7")}
            class={`focus:border-4 focus:border-black border-2 hover:scale-90 transform rounded-full shadow-inner  h-16 w-16 font-light text-2xl ${Class} bg-gray-100 text-gray-400`}
            style={result[result.length - 1] == "7"
              ? `background:${normalKeyColor};border:2px solid black !important;`
              : `background:${normalKeyColor}`}>7</button
          >
        </div>
        <div class="px-4 py-2">
          <button
            on:click={() => normalkeys("8")}
            class={`focus:border-4 focus:border-black border-2 hover:scale-90 transform rounded-full shadow-inner  h-16 w-16 font-light text-2xl ${Class} bg-gray-100 text-gray-400`}
            style={result[result.length - 1] == "8"
              ? `background:${normalKeyColor};border:2px solid black !important;`
              : `background:${normalKeyColor}`}>8</button
          >
        </div>
        <div class="px-4 py-2">
          <button
            on:click={() => normalkeys("9")}
            class={`focus:border-4 focus:border-black border-2 hover:scale-90 transform rounded-full shadow-inner  h-16 w-16 font-light text-2xl ${Class} bg-gray-100 text-gray-400`}
            style={result[result.length - 1] == "9"
              ? `background:${normalKeyColor};border:2px solid black !important;`
              : `background:${normalKeyColor}`}>9</button
          >
        </div>
        <div class="px-4 py-2 border-l">
          <button
            on:click={() => oper("*")}
            class={`focus:border-4 focus:border-black border-2 hover:scale-90 transform rounded-full shadow-inner  h-16 w-16 font-light text-2xl ${Class} bg-gray-200 text-gray-400`}
            style={`background:${operatorKeyColor}`}>✕</button
          >
        </div>
      </div>
      <div class="flex justify-between">
        <div class="px-4 py-2">
          <button
            on:click={() => normalkeys("4")}
            class={`focus:border-4 focus:border-black border-2 hover:scale-90 transform rounded-full shadow-inner  h-16 w-16 font-light text-2xl ${Class} bg-gray-100 text-gray-400`}
            style={result[result.length - 1] == "4"
              ? `background:${normalKeyColor};border:2px solid black !important;`
              : `background:${normalKeyColor}`}>4</button
          >
        </div>
        <div class="px-4 py-2">
          <button
            on:click={() => normalkeys("5")}
            class={`focus:border-4 focus:border-black border-2 hover:scale-90 transform rounded-full shadow-inner  h-16 w-16 font-light text-2xl ${Class} bg-gray-100 text-gray-400`}
            style={result[result.length - 1] == "5"
              ? `background:${normalKeyColor};border:2px solid black !important;`
              : `background:${normalKeyColor}`}>5</button
          >
        </div>
        <div class="px-4 py-2">
          <button
            on:click={() => normalkeys("6")}
            class={`focus:border-4 focus:border-black border-2 hover:scale-90 transform rounded-full shadow-inner  h-16 w-16 font-light text-2xl ${Class} bg-gray-100 text-gray-400`}
            style={result[result.length - 1] == "6"
              ? `background:${normalKeyColor};border:2px solid black !important;`
              : `background:${normalKeyColor}`}>6</button
          >
        </div>
        <div class="px-4 py-2 border-l">
          <button
            on:click={() => oper("-")}
            class={`focus:border-4 focus:border-black border-2 hover:scale-90 transform rounded-full shadow-inner  h-16 w-16 font-light text-2xl ${Class} bg-gray-200 text-gray-400`}
            style={`background:${operatorKeyColor}`}>−</button
          >
        </div>
      </div>
      <div class="flex justify-between">
        <div class="px-4 py-2">
          <button
            on:click={() => normalkeys("1")}
            class={`focus:border-4 focus:border-black border-2 hover:scale-90 transform rounded-full shadow-inner  h-16 w-16 font-light text-2xl ${Class} bg-gray-100 text-gray-400`}
            style={result[result.length - 1] == "1"
              ? `background:${normalKeyColor};border:2px solid black !important;`
              : `background:${normalKeyColor}`}>1</button
          >
        </div>
        <div class="px-4 py-2">
          <button
            on:click={() => normalkeys("2")}
            class={`focus:border-4 focus:border-black border-2 hover:scale-90 transform rounded-full shadow-inner  h-16 w-16 font-light text-2xl ${Class} bg-gray-100 text-gray-400`}
            style={result[result.length - 1] == "2"
              ? `background:${normalKeyColor};border:2px solid black !important;`
              : `background:${normalKeyColor}`}>2</button
          >
        </div>
        <div class="px-4 py-2">
          <button
            on:click={() => normalkeys("3")}
            class={`focus:border-4 focus:border-black border-2 hover:scale-90 transform rounded-full shadow-inner  h-16 w-16 font-light text-2xl ${Class} bg-gray-100 text-gray-400`}
            style={result[result.length - 1] == "3"
              ? `background:${normalKeyColor};border:2px solid black !important;`
              : `background:${normalKeyColor}`}>3</button
          >
        </div>
        <div class="px-4 py-2 border-l">
          <button
            on:click={() => oper("+")}
            class={`focus:border-4 focus:border-black border-2 hover:scale-90 transform rounded-full shadow-inner  h-16 w-16 font-light text-2xl ${Class} bg-gray-200 text-gray-400`}
            style={`background:${operatorKeyColor}`}>+</button
          >
        </div>
      </div>
      <div class="flex justify-between">
        <div class="px-4 py-2">
          <button
            on:click={() => normalkeys("0")}
            class={` text-gray-400 focus:border-4 focus:border-black border-2 hover:scale-90 transform rounded-full shadow-inner  h-16 font-light text-2xl ${Class} text-left px-6 bg-gray-100`}
            style={result[result.length - 1] == "0"
              ? `background:${normalKeyColor};border:2px solid black !important;width:${zeroButtonWidth}rem`
              : `background:${normalKeyColor};width:${zeroButtonWidth}rem;`}
            >0</button
          >
        </div>
        <div class="px-4 py-2">
          <button
            on:click={() => otherkeys(".")}
            class={`focus:border-4 focus:border-black border-2 hover:scale-90 transform rounded-full shadow-inner  h-16 w-16 font-light text-2xl ${Class} bg-gray-100 text-gray-400`}
            style={result[result.length - 1] == "."
              ? `background:${normalKeyColor};border:2px solid black !important;`
              : `background:${normalKeyColor}`}>•</button
          >
        </div>
        <div class="px-4 py-2 border-l">
          <button
            on:click={() => calculate(opr)}
            class={`focus:border-4 focus:border-black border-2 hover:scale-90 transform rounded-full shadow-inner  h-16 w-16 font-light text-2xl ${Class} bg-gray-200 text-gray-400`}
            style={`background:${operatorKeyColor}`}>=</button
          >
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  .disabled {
    pointer-events: none;
  }
  input {
    text-align: end;
    transition: 1.5s ease-in-out;
  }

  button {
    cursor: pointer;
  }
</style>
