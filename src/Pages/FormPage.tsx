import React, { ChangeEventHandler } from 'react'
import { carDetailType, useCarContext } from '../GlobalContext/CarContext'
import Header from '../Components/Header';
import _ from "lodash";
import TextComponent from '../Components/TextComponent';
import useValue from '../Hooks/useValue';
import style from "../Components/Header.module.css"
import { wholeNumbers } from '../Utils/constants';
import CustomButton from '../Components/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Store/store';
import { carNameSliceAction } from '../Store/companyNameSlice';
import { useNavigate } from 'react-router-dom';

const FormPage = () => {
    const { carDetails } = useCarContext();
    const nameVal = useValue(carDetails?.Name);
    const yearVal = useValue(carDetails?.Year);
    const originVal = useValue(carDetails?.Origin);
    const listOfFields = [{ value: nameVal.value, textChangeHandler: nameVal.valueChangeHandler, placeholder: nameVal.value }, { value: yearVal.value, textChangeHandler: yearVal.valueChangeHandler, placeholder: yearVal.value }, { value: originVal.value, textChangeHandler: originVal.valueChangeHandler, placeholder: originVal.value },]

    const carNames = useSelector((state: RootState) => state?.names?.cars) as any;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    //not using the labels for fields to save time 
    // skipping the proper validations before clicking the submit button and not using onSubmit which comes with form tag

    return (
        <div>
            <Header menus={[{ name: carDetails?.Name }]} />
            <form className={style.fieldTop}>
                {_.map(listOfFields, (field: any, index: number) =>
                    <div className={style.spacer} key={index}>
                        <TextComponent value={field?.value} textChangeHandler={field?.textChangeHandler} placeholder={field?.placeholder} />
                    </div>)}
                <input type='file' accept='image/*' onChange={(e: any) => console.log(e.target.files[wholeNumbers.zero])} />
                <div className={style.spacer}>
                    <CustomButton title={'Submit'} onClickhandler={function (): void {
                       const val =  _.chain(carNames).map((car:carDetailType)=>{
                            if(car?.id === carDetails?.id){
                                return{
                                    ...car,
                                    Name:nameVal?.value,
                                    Year:yearVal?.value,
                                    Origin:originVal?.value,
                                }
                            }
                            else{
                                return car;
                            }
                        }).value();
                        dispatch(carNameSliceAction.addCarNames(val as any))
                        navigate("/")
                    }} />
                </div>
            </form>
        </div>
    )
}

export default FormPage