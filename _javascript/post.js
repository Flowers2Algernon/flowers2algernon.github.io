import { basic, initSidebar, initTopbar } from './modules/layouts';
import {
  initAccordion,
  loadImg,
  imgPopup,
  initLocaleDatetime,
  initClipboard,
  toc,
  highlightLines,
  runCpp,
  runJavascript,
  runPython,
  runRust
} from './modules/plugins';

loadImg();
toc();
imgPopup();
initSidebar();
initLocaleDatetime();
initClipboard();
initTopbar();
basic();
highlightLines();
runCpp();
runJavascript();
runPython();
runRust();
initAccordion();
