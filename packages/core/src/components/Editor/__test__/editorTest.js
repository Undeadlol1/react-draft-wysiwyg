/* @flow */

import React from 'react';
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';
import Editor from '..';

describe('Editor test suite', () => {
  it('should have a div when rendered', () => {
    expect(shallow(<Editor />).html().startsWith('<div')).to.equal(true);
  });

  it('should have an editorState object in state', () => {
    const editor = shallow(<Editor />);
    assert.isDefined(editor.state().editorState);
    assert.isDefined(editor.state().editorFocused);
  });

  it('should have toolbarHidden as false by default', () => {
    const editor = shallow(<Editor />);
    expect(editor.find('.rdw-editor-toolbar')).to.have.length(1);
  });

  it('should not have toolbar if toolbarHidden is set to true', () => {
    const editor = shallow(<Editor toolbarHidden />);
    expect(editor.find('.rdw-editor-toolbar')).to.have.length(0);
  });
});
