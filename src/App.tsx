import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'components';
import { Intro, Salary, Farm, Credit, Deposit } from 'features';

const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="farm" element={<Farm />} />
      <Route path="salary" element={<Salary />} />
      <Route path="">
        <Route path="credit" element={<Credit />} />
        <Route path="deposit" element={<Deposit />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Layout>
);

export default App;
