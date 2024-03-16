import React from 'react'
import CarTile from './CarTile'
import _ from "lodash";
import { useSelector } from 'react-redux';
import { RootState } from '../Store/store';
import style from "./Header.module.css"
import { useNavigate } from 'react-router-dom';
import { carDetailType, useCarContext } from '../GlobalContext/CarContext';

export const CarContainer = () => {
    const carNames = useSelector((state: RootState) => state?.names?.cars) as any;
    const navigate = useNavigate();
    const { getCarDetails } = useCarContext();
    return (
        <div className={style.topSpacing}>
            {_.map(carNames, (car: any) => <CarTile
                key={car?.id}
                Name={_.capitalize(car?.Name)}
                Year={car?.Year}
                Origin={car?.Origin}
                car={car}
                carClickHandler={(car: carDetailType) => {
                    //Routes can be added to constant file , due to lack of time using it as it is 
                    //Data can be passed via navigate but since it has been given that we need to use context API , using this scenario to fulFill it 
                    navigate("/form")
                    getCarDetails(car);

                }}
            />
            )}
        </div>
    )
}
