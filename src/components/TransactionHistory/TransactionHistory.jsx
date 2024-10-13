import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <>
      <table className={css["transactions-table"]}>
        <thead>
          <tr className={css["transactions-table-row"]}>
            <th className={css["transactions-table-header"]}>Type</th>
            <th className={css["transactions-table-header"]}>Amount</th>
            <th className={css["transactions-table-header"]}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr className={css["transactions-table-row"]} key={item.id}>
              <td className={css["transactions-table-data"]}>{item.type}</td>
              <td className={css["transactions-table-data"]}>{item.amount}</td>
              <td className={css["transactions-table-data"]}>
                {item.currency}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TransactionHistory;
