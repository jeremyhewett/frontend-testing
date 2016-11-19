import { configure } from '@kadira/storybook';

function loadStories() {
  require('../../../stories/aclButtonStories.js');
  require('../../../stories/sidePanelStories.js');
  require('../../../stories/selectFieldStories.js');
}

configure(loadStories, module);