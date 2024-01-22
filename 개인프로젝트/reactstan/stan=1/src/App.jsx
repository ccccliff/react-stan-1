import { useState } from "react";
import "./App.css";
function App() {
  const initialArray = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
  ];
  const [array, setArray] = useState(initialArray);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState("");
  
  const handleForEach = () => {
    let tempResult = "";
    array.forEach(function (fruit) {
      tempResult += `${fruit} ,`;
    });
    setResult(tempResult.slice(0, -2));
  };
  const handleFilter = () => {
    const filteredList = array.filter(function (fruit) {
      if (fruit.includes(query)) {
        return true;
      } else {
        return false;
      }
    });
    setResult(filteredList.join(","));
  };
  const handleMap = () => {
    const mappedList = array.map(function (fruit) {
      return fruit.toUpperCase();
    });
    setResult(mappedList.join(","));
  };
  const handleReduce = () => {
    const reducedListText = array.reduce(function(acc, cur) {
        return `${acc}, ${cur}`;
    });
    setResult(reducedListText);
  };

  const handlePush = () => {
    if(!query) {
      alert("값이 없습니다")
      return false;
    }
    const newArr = [...array, query];
    setArray(newArr);
    setResult(newArr.join(","))
  }
  const handlePop = () => {
const newArr = [...array];
newArr.pop();
setArray(newArr);
setResult(newArr.join(","))
  };

  const handleSlice = () => {
    const newArr = [...array];
    const slicdArr = newArr.slice(0,3);
    setArray(slicdArr);
    setResult(slicdArr.join(","))
  }

  const handleSplice = () => {
    const newArr = ['apple','kiwi','lime',...array];
    newArr.splice(3,3)
    setArray(newArr);
    setResult(newArr.join(","))
  }
  const handleIndexOf = () => {
    const newArr = [...array];
    const indexArr= newArr.indexOf(query)
    setArray(newArr);
    setResult(indexArr)
  }

  // 기능안됨
  const handleIncludes = () => {
    const newArr = [...array];
    const inculdesFruit = newArr.includes(query)
    setArray(newArr);
    setResult(inculdesFruit);
  }
  const handleFind = () => {
    const newArr = [...array];
    const foundFruit = newArr.find(index => index.includes(query));
    setResult(foundFruit ? foundFruit : "Not Found");
  }

   // 기능안됨
  const handleSome = () => {
    const newArr = [...array];
    const someFruits = newArr.some(function(index){
      return index.includes(query);
    })
    setArray(newArr)
    setResult(someFruits);
  }
//기능안됨
  const handleEvery = () => {
    const newArr = [...array];
    const fruitsEvery = newArr.every(function(index){
      return index.includes(query)
    })
    setArray(newArr)
    setResult(fruitsEvery);
  }

  const handleSort = () => {
    const newArr = [...array];
   newArr.sort((a, b) => b.localeCompare(a));
    setArray(array);
    setResult(newArr.join(","))
      };
    



  




  


  return (
    <div className="st-API">
      <div className="title">
      <h1>Standard반 배열 API</h1>
      </div>
      <div className="textInput">
        텍스트를 입력하세요 :
        <input
          value={query}
          onChange={function (e) {
            setQuery(e.target.value);
          }}
          />
       
      </div>
      <div className="buttons">
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>filter</button>
        <button onClick={handleMap}>map</button>
        <button onClick={handleReduce}>Reduce</button>
        <button onClick={handlePush}>Push</button>
        <button onClick={handlePop}>Pop</button>
        <button onClick={handleSlice}>slice</button>
        <button onClick={handleSplice}>splice</button>
        <button onClick={handleIndexOf}>indexOf</button>
        <button onClick={handleIncludes}>includes</button>
        <button onClick={handleFind}>find</button>
        <button onClick={handleSome}>some</button>
        <button onClick={handleEvery}>every</button>
        <button onClick={handleSort}>sort</button>



      </div>
      <div className="ini-Arr">
        <strong>원본배열:</strong> : {array.join(",")}
      </div>
      <div className="results">
        <strong>결과물:</strong> : {result}
      </div>
    </div>
  );
}
export default App;
