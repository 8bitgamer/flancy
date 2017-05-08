import { takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import * as duck from 'app/ducks/recipes';
import { getRequest } from 'app/helpers/api';
import 'babel-polyfill';

function *loadRecipesSaga(action) {
    try {
    	const recipes = yield call(getRequest, '', action.payload);
        yield put(duck.loadedRecipesSuccess(recipes));
    } catch (error) {
        yield put(duck.loadedRecipesFailed(error));
    }
}

function *loadRecipeSaga(action) {
    try {
    	const recipe = yield call(getRequest, '', action.payload);
        yield put(duck.loadedRecipeSuccess(recipe));
        if (action.meta.callback) {
            yield action.meta.callback();
        };
    } catch (error) {
        yield put(duck.loadedRecipeFailed(error));
    }
}

export default function *rootSaga() {
	yield [
		call(takeLatest, duck.LOAD_RECIPES, loadRecipesSaga),
		call(takeLatest, duck.LOAD_RECIPE, loadRecipeSaga)
	];
}