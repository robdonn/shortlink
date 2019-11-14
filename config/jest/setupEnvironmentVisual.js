const { toMatchImageSnapshot } = require('jest-image-snapshot');

expect.extend({ toMatchImageSnapshot });

global.viewports = {
  mobile: {
    width: 480,
    height: 1200,
    isMobile: true
  },
  tablet: {
    width: 768,
    height: 1200,
    isMobile: true
  },
  desktop: {
    width: 1920,
    height: 1200
  }
};
