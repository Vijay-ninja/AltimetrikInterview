import React, { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import Data from "./Cars.json"
import { carNameSliceAction } from './Store/companyNameSlice';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { listOfRoutes } from './Utils/listOfRoutes';
const routes =  createBrowserRouter(listOfRoutes);
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(carNameSliceAction.addCarNames(Data as any))
  }, [Data])

  
  return <><RouterProvider router={routes}/></>;
}

export default App;
