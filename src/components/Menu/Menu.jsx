import React from 'react';
import { Router, Link } from '@reach/router';

import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import FriendList from '../Friendlist/Friendlist';
import TransactionTable from '../Transactions/Transaction';

import user from '../../assets/user.json';
import statisticalData from '../../assets/statistical-data.json';
import friends from '../../assets/friends.json';
import transaction from '../../assets/transactions.json';

import styles from '../../App.css';

const Menu = () => {
  return (
    <>
      <nav className={styles.menu}>
        <Link to="/">Задание 1 - Профиль социальной сети</Link>
        <Link to="task2">Задание 2 - Секция статистики</Link>
        <Link to="task3">Задание 3 - Список друзей</Link>
        <Link to="task4">Задание 4 - История транзакций</Link>
      </nav>
      <Router>
        <Task1 path="/" />
        <Task2 path="/task2" />
        <Task3 path="/task3" />
        <Task4 path="/task4" />
      </Router>
    </>
  );
};

const Task1 = () => <Profile {...user} />;
const Task2 = () => <Statistics stats={statisticalData} />;
const Task3 = () => <FriendList friends={friends} />;
const Task4 = () => <TransactionTable transaction={transaction} />;

export default Menu;
