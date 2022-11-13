import { events } from './sortingFuncs';
import { htmlStructure, header } from '../components/htmlStructure';
import startSortingBtn from './startSortingBtn';

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};

export default startApp;
