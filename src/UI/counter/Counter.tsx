import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {getValue, incrementValue} from "../../BLL/reducer";
import {AppStateType} from "../../BLL/store";


type MapDispatchToPropsType = {
    getValue: () => void
    incrementValue: () => void
}
type MapStateToPropsType = {
    value: number
}

type PropsType = MapDispatchToPropsType & MapStateToPropsType

const Counter: React.FC<PropsType> = (props) => {

    useEffect(() => {
        props.getValue()
    }, []);

    return (
        <div>
            <h1>Counter</h1>
            <h2>Values <strong>{props.value}</strong></h2>
            <button onClick={props.incrementValue}>+</button>
        </div>
    )
}

const mapStateToProps = (state: AppStateType):MapStateToPropsType=> {
    return {
        value: state.counter.value
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {getValue, incrementValue})(Counter);