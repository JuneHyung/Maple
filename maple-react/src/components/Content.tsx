import RankInfoPage from '@/pages/RankInfoPage';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchHeader from './common/SearchHeader';
import TabContent from './common/TabContent';

const Content = () => {
  return (
    <div className="content">
      <BrowserRouter>
        <SearchHeader />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<RankInfoPage />}></Route>
            <Route path="/user/:characterName/*" element={<TabContent/>}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default Content;
