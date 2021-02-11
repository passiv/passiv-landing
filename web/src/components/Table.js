import React from 'react'
import Img from 'gatsby-image'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import clientConfig from '../../client-config'

import styles from "./table.module.css";

function Table (props) {
  if (!props || !props.tableTitle || !props.tableDesc || !props.row ) return null

  return (
    <>
    <div className={styles.tableContainer}>
      <h2 className={styles.heading}>{props.tableTitle}</h2>
      {props.tableDesc && (
        <p>{props.tableDesc}</p>
      )}
      <table className={styles.table}>
        <tr>
        {props.tableHeadingRow.map(heading => (
          <th key={heading._key}>
            {heading}
          </th>
        ))}
        </tr>
        {props.row.map(cells => (
          <tr key={cells._key}>
          {cells.cell.map(item => (
            <td key={item._key}>{item}</td>
          ))}
          </tr>
        ))}
      </table>
    </div>
    </>
  )
}

export default Table
