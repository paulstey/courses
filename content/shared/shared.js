// =============================================================================
// Shared Data Gymnasia Scripts
// =============================================================================

import {script} from '@mathigon/boost';
import './components/quill';

script('/resources/shared/static/prism.js');

script('/resources/shared/static/juniper.min.js').then(() => {
  if (window.CodeMirror) window.CodeMirror.defaults.indentUnit = 4;
  new window.Juniper({
    selector: '[python-executable]',
    repo: 'data-gymnasia/python-binder',
    isolateCells: false,
    msgLoading: 'Loading or None returned'
  });
  new window.Juniper({
    selector: '[bash-executable]',
    repo: 'data-gymnasia/bash-binder',
    isolateCells: false,
    msgLoading: 'Loading or nothing returned', 
    kernelType: 'bash',
    language: 'shell'
  });
  new window.Juniper({
    selector: '[julia-executable]',
    repo: 'data-gymnasia/julia-binder',
    isolateCells: false,
    msgLoading: 'Loading or nothing returned', 
    kernelType: 'julia-1.1',
    language: 'julia'
  });
  new window.Juniper({
    selector: '[r-executable]',
    repo: 'data-gymnasia/r-binder',
    isolateCells: false,
    msgLoading: 'Loading or NULL returned',
    kernelType: 'ir',
    language: 'r'
  });
});
