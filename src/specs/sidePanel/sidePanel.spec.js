(function() {
  'use strict';

  let sidePanel = require('./sidePanel/sidePanel.pageObject');

  describe('sidePanel', function () {

    beforeEach(() => {
      sidePanel.load();
    });

    it('should not be visible initially', function () {
      expect(sidePanel.element.isVisible()).toEqual(false);
    });

    it('should become visible and call onOpen when opened', () => {
      sidePanel.open();
      expect(sidePanel.element.isVisible()).toEqual(true);
      expect(sidePanel.onOpenFired).toEqual(true);
    });

    describe('when open', () => {

      beforeEach(() => {
        sidePanel.open();
      });

      it('should display given title', () => {
        expect(sidePanel.title).toEqual('ACL UI is Awesome');
      });

      it('should display transcluded content', () => {
        expect(sidePanel.content.getText()).toEqual('Side Panel Content');
      });

      it('should become invisible and call onClose when closed', () => {
        sidePanel.close();
        expect(sidePanel.element.isVisible()).toEqual(false);
        expect(sidePanel.onCloseFired).toEqual(true);
      });

    });

  });

}());