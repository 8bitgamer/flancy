export const LOAD_RECIPES = 'recipes/load';
export const LOADED_RECIPES_SUCCESS = 'recipes/loaded.success';
export const LOADED_RECIPES_FAILED = 'recipes/loaded.failed';
export const LOAD_RECIPE = 'recipe/load';
export const LOADED_RECIPE_SUCCESS = 'recipe/loaded.success';
export const LOADED_RECIPE_FAILED = 'recipe/loaded.failed';

const initialState = {
    loading: false,
    error: false,
    result: {},
};

export default function recipesReducer(state = initialState, { type, payload, meta }) {
    switch (type) {
    case LOAD_RECIPES:
        return {
            ...initialState,
            loading: true,
        };
    case LOADED_RECIPES_SUCCESS:
        return {
            ...initialState,
            loading: false,
            result: payload,
        };
    case LOADED_RECIPES_FAILED:
        return {
            ...initialState,
            loading: false,
            error: true,
        };
    case LOAD_RECIPE:
        return {
            ...initialState,
            loading: true,
        };
    case LOADED_RECIPE_SUCCESS:
        return {
            ...initialState,
            loading: false,
            result: payload,
        };
    case LOADED_RECIPE_FAILED:
        return {
            ...initialState,
            loading: false,
            error: true,
        };
    default:
        return state;
    }
}

export function loadRecipes(payload, meta) {
    return { type: LOAD_RECIPES, payload: payload, meta: meta };
}

export function loadedRecipesSuccess(payload) {
    return { type: LOADED_RECIPES_SUCCESS, payload: payload };
}

export function loadedRecipesFailed(error) {
    return { type: LOADED_RECIPES_FAILED, payload: error, error: true };
}

export function loadRecipe(payload, meta) {
    return { type: LOAD_RECIPE, payload: payload, meta: meta };
}

export function loadedRecipeSuccess(payload) {
    return { type: LOADED_RECIPE_SUCCESS, payload: payload };
}

export function loadedRecipeFailed(error) {
    return { type: LOADED_RECIPE_FAILED, payload: error, error: true };
}