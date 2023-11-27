import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'components';
import { Intro, Salary, Farm, Credit } from 'features';

const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="farm" element={<Farm />} />
      <Route path="salary" element={<Salary />} />
      <Route path="credit" element={<Credit />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Layout>
);

export default App;
