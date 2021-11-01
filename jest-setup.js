//enables testing-library/jest-dom for more declarative testing
import '@testing-library/jest-dom';

//polyfills for react-graph-vis, necessary to test Network component
import 'jest-canvas-mock';
const nodeCrypto = require('crypto');
window.crypto = {
  getRandomValues: function (buffer) {
    return nodeCrypto.randomFillSync(buffer);
  },
};
