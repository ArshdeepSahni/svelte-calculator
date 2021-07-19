<h1 align="center">
  <table><tr><th><img width=100% src="https://user-images.githubusercontent.com/56549294/126062957-e2baa608-9d5d-4462-ab40-a3a08140917b.png" alt="Svelte-Calculator"/></th></tr><tr><th><br><br><span class="badge-npmdownloads"><a href="https://npmjs.org/package/svelte-calculator-tailwind" title="View this project on NPM"><img width=70% src="https://img.shields.io/npm/dm/svelte-calculator.svg" alt="NPM downloads" /></a></span><br><br><hr>


```
npm i svelte-calculator
```


<hr><br><br><a href="https://www.npmjs.com/package/svelte-calculator"><img width=50% src="https://user-images.githubusercontent.com/56549294/125153433-49c2f680-e171-11eb-93ec-7e0fba7703a8.png" alt="npm"/></a><br><br></th></tr><tr><td><img width="100%" alt="Svelte Calculator
" src="https://user-images.githubusercontent.com/56549294/126062896-cbd3acbc-d224-48c9-bcfe-016d38efaf36.png"/></td></tr>
</table>
<br>
<br>
<br>
  <hr>
<br>
<br>
<br>

  <h1 align="center">Props</h1>

<br>
<br><div align="center">


|Prop|About|Default Value|Format|
|---|---|---|---|
|Sound|Key Sounds|true|Boolean|
|animation|Boolean Value to Enable and Disable Default Animation|true|Boolean|
|size|Size of Calculator|"100"|Any Size out of [ "50" , "75" , "90" , "95" , "100" , "105" , "110" , "125" , "150" ]|
|normalKeyColor|Background Color of Normal Numeric Keys of Calculator|rgba( 243 , 244 , 246 )|ColorName or rgb or rgba or Hex|
|operatorKeyColor|Background Color of Operator Keys of Calculator|rgba( 229 , 231 , 235 )|ColorName or rgb or rgba or Hex|
|Class|Classes to add to the Calculator Component|NA|ClassName (String)|
|calculatorBackground|Background Color of Calculator|#ffffff|ColorName or rgb or rgba or Hex|
|inputBackground|Background Color of Screen of Calculator|rgba( 229 , 231 , 235 )|ColorName or rgb or rgba or Hex|





https://user-images.githubusercontent.com/56549294/126066513-5445825f-a416-4c73-8ac3-0198e83f4fab.mov




<br>
<br>
<br>
  <hr>
<br>
<br>
<br>
  <h1 align="center">Steps To Use thus Plugin:</h1>
  </div>
  <br>
<ul>

<li><h3> 1. Install</h3> <br>


```bash
npm i svelte-calculator
```

</li>
<br>

<li><h3> 2. Import</h3> <br>


```javascript
// in .js file where you want to use this component
import Calculator from "svelte-calculator";
```

</li>
  <br>
<li><h3> 4. Usage</h3> <br>

```javascript
// in the same.js file where you want to use this component outside <script></script> tag
<Calculator
  size={"200"}
  normalKeyColor="white"
  operatorKeyColor="orange"
  Class={"calculatorClass"}
  animation={true}
  calculatorBackground={"rgba(0,0,0,0.1)"}
  inputBackground={"#DDE5B6"}
/>
```

</li>
  </ul>
<br>
<br>
<br>
  <hr>
<br>
<br>
<br>

<h1 align="center">


```diff
+ Developed with ❤️ by Arshdeep Singh
```

</h1>
