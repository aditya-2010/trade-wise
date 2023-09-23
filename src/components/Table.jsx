import { useEffect, useRef, useState } from "react";
import styles from "./Table.module.css";
import PropTypes from "prop-types";

function Table({ data, cols, searchBar }) {
  const inputEle = useRef(null);
  const [search, setSearch] = useState("");
  const [tableData, setTableData] = useState([]);

  function formatHeader(headText) {
    let str = headText;
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  }

  function handleSearch(e) {
    setSearch(e.target.value);
    setTableData(
      data.filter((entry) =>
        entry[searchBar].toLowerCase().startsWith(e.target.value)
      )
    );
  }

  useEffect(() => {
    setTableData(data);
  }, [data]);

  useEffect(() => {
    if (searchBar) inputEle.current.focus();
  }, [searchBar]);

  return (
    <div className={styles.tableComponent}>
      {typeof searchBar === "string" && (
        <input
          className="searchbar"
          type="text"
          placeholder="Search user..."
          value={search}
          onChange={(e) => handleSearch(e)}
          ref={inputEle}
        />
      )}

      <table className={styles.table}>
        <tbody>
          <tr>
            {cols.map((col) => (
              <th key={col}>{formatHeader(col)}</th>
            ))}
          </tr>
          {tableData.map((entry) => (
            <tr key={entry._id}>
              {cols.map((col, i) => (
                <td key={i} className={styles.data} id={entry[col]}>
                  <span>{entry[col]}</span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  data: PropTypes.array, // array of objects
  cols: PropTypes.array, // columns to be displayed
  searchBar: PropTypes.string, // column to be searched
};

export default Table;
