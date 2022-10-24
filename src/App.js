import "./styles.css";
import { receipt1, receipt2, receipt3 } from "./data";
import Receipt from "./components/Receipt";

export default function App() {
  return (
    <div className="App">
      <h1>Korilla React Receipts</h1>

      {/* receiptP is prop, pass receipt1,2,3 */}
      <Receipt receiptP={receipt1} />
      <Receipt receiptP={receipt2} />
      <Receipt receiptP={receipt3} />
    </div>
  );
}
