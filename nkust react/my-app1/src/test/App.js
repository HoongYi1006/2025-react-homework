import './App.css'; // 引入 CSS 檔案
import InputTexts from './InputTexts';
import Numbers from './Numbers';
import {NumbersWithLimitByCSS, NumbersWithLimitByHTML} from './Numbers';
import StarRating from './StarRating';
function App() {
  return (
    <div className="App-body">
    <h1>inputTexts</h1>
    <InputTexts/>

    <h1>Numbers</h1>
    <Numbers/>

    <h1>Numbers With Limit By HTML</h1>
    <NumbersWithLimitByHTML/>

    <h1>Numbers With Limit By CSS</h1>
    <NumbersWithLimitByCSS/>

    <h1>StarRating</h1>
    <div style={{flexDirection: 'row'}}>
    <StarRating/>






    </div>
    </div>
    );
    }
export default App;