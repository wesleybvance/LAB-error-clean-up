import { events } from './sortingFuncs';
import startSortingBtn from './startSortingBtn';
import { htmlStructure, header } from '../components/htmlStructure';

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};

export default startApp;
