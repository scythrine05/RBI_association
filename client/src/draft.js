import React, { Component } from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

class Draft extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = (editorState) => this.setState({ editorState });
  }
  render() {
    return (
      <div className="container">
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          placeholder="Make Something Great."
        />
      </div>
    );
  }
}

export default Draft;
