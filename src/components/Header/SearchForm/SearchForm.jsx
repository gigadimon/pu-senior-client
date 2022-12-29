import { useState } from 'react';
import s from './SearchForm.module.css';
import { searchAgents } from '../../../asyncService/searchAgents';

export function SearchForm({ setFoundOperators, setLoading, setIsOpen }) {
  const [search, setSearch] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    setIsOpen(true);
    setLoading(true);
    const foundAgents = await searchAgents(search);
    setFoundOperators(foundAgents);
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <input
        className={s.input}
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
        onFocus={() => {
          setIsOpen(true);
        }}
        placeholder="найти любого оператора"
      />
      {/* <button type="submit">search</button> */}
    </form>
  );
}
