import "./styles.css";
import { receipt1, receipt2, receipt3 } from "./data";
import receipts from "./dataArray";
import Receipt from "./components/Receipt";

export default function App() {
  return (
    <div className="App">
      <h1>Korilla React Receipts</h1>

      {/* receiptProp is prop, pass receipt1,2,3 */}
      {/* <Receipt receiptProp={receipt1}/>
      <Receipt receiptProp={receipt2}/>
      <Receipt receiptProp={receipt3}/> */}

      {/* show receipts that are not paid */}
      {/* {receipt1.paid ? null : <Receipt receiptP={receipt1} />}
      {receipt2.paid ? null : <Receipt receiptP={receipt2} />}
      {receipt3.paid ? null : <Receipt receiptP={receipt3} />} */}
      
      {/* map each receipt in array */}
      {/* {receipts.map((el, idx) => {
        return <Receipt key={idx} receiptProp={el} />;
      })} */}

      {/* combine map and show receipts not paid */}
      {receipts.map((el, idx) => {
        return !el.paid &&<Receipt key={idx} receiptProp={el} />;
      })}
    </div>
  );
}
