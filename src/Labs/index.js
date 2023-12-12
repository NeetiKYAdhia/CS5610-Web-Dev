import Nav from '../nav';
import Assignment3 from './assignment3';
import Assignment4 from './assignment4';
import { Routes, Route, Navigate } from 'react-router';
import store from './store';
import { Provider } from 'react-redux';
import Assignment5 from './a5';

const Labs = () => {
  return (
    <Provider store={store}>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate to="a3" />} />
          <Route path="a3/*" element={<Assignment3 />} />
          <Route path="a4" element={<Assignment4 />} />
          <Route path="a5" element={<Assignment5 />} />
        </Routes>
      </div>
    </Provider>
  );
};
export default Labs;