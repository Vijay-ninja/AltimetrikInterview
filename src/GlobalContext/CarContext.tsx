import React, { ReactElement, useContext, useState } from 'react'
import { createContext } from 'react'

interface CarLoader {
    loading:boolean;
    toggleLoading:()=>void;
    carDetails:carDetailType;
    getCarDetails:(val:carDetailType)=>void;
}

const CarContext = createContext<CarLoader>({loading:false,toggleLoading:()=>{},carDetails:{
    Miles_per_Gallon: 0,
    Cylinders: 0,
    Displacement: 0,
    Horsepower: 0,
    Weight_in_lbs: 0,
    Acceleration: 0,
    Name: '',
    Year: '',
    Origin: '',
    id: 0
},getCarDetails:(val:carDetailType)=>{}});

export type carDetailType ={
    Miles_per_Gallon: number,
    Cylinders: number,
    Displacement: number,
    Horsepower: number,
    Weight_in_lbs: number,
    Acceleration:number,
    Name:string,
    Year:string,
    Origin:string,
    id:number,
}

export const CarContextProvider = ({ children }: { children: ReactElement | any }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [carDetails, setCarDetails] = useState<carDetailType>({
        Miles_per_Gallon: 0,
        Cylinders: 0,
        Displacement: 0,
        Horsepower: 0,
        Weight_in_lbs: 0,
        Acceleration: 0,
        Name: '',
        Year: '',
        Origin: '',
        id: 0
    })
    const toggleLoading = (): void => setLoading((loading: boolean) => !loading);

    const getCarDetails = (car:carDetailType)=>{
      setCarDetails(car);
    }


    return <CarContext.Provider value={{ loading, toggleLoading ,carDetails,getCarDetails}}>
        {children}
    </CarContext.Provider>
}



export const useCarContext =()=>  useContext(CarContext);

