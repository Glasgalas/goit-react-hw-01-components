import React from 'react';
import PropTypes from 'prop-types';
import styles from './Transaction.module.css';

const TransactionTable = ({ transaction }) => (
  <table className={styles.transaction}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {transaction.map(item => (
        <TransactionItem key={item.id} {...item} />
      ))}
    </tbody>
  </table>
);

const TransactionItem = ({ type, amount, currency }) => (
  <tr>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
);

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionTable;
