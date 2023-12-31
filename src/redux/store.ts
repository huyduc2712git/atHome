import { createStore, combineReducers } from 'redux';
import { syncTranslationWithStore, i18nReducer } from 'react-redux-i18n';
import reducers from "@redux/reducer/rootReducer";
import i18nAction from './action/i18nAction';
import localize from '../localization/index';

const rootReducer = combineReducers({
  ...reducers,
  i18n: i18nReducer,
});

const store =  createStore(rootReducer);

syncTranslationWithStore(store)
store.dispatch(i18nAction.loadTranslations(localize));
store.dispatch(i18nAction.setLocale("vi"));

export default store;
