import {createSelector} from "@reduxjs/toolkit";
import {get} from "lodash";

export const selectCounter = state => get(state, 'counter.value', 0);
export const selectCounterAddTen = createSelector(
    [selectCounter], value => value + 10,
)