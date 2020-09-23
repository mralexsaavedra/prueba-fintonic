import React from 'react';
import { useData } from '../../hooks/useData';

import Botones from '../../components/Botones';
import Spinner from '../../components/Spinner';
import Table from '../../components/Table';

export default function Home() {
  const { loading, data } = useData();

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="App-wrapper">
          <div className="App-main">
            <div className="App-table">
              <h2 className="App-title">Browse Questions</h2>
              <Table data={data} />
              <Botones />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
