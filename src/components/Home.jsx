import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToPastes } from "../redux/slice/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  function pasteHandler() {
    const pasteObj = {
      id: Date.now().toString(36),
      title: title,
      content: content,
      createdAt: new Date().toISOString(),
    };

    dispatch(addToPastes(pasteObj));

    setTitle("");
    setContent("");
  }
  return (
    <div className="page-container">
      <form
        className="form-card"
        onSubmit={(e) => {
          e.preventDefault();
          pasteHandler();
        }}
      >
        <input
          className="form-input"
          type="text"
          placeholder="Enter Paste Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="form-textarea"
          name="content"
          placeholder="Enter Paste Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <input className="primary-btn" type="submit" value="Create Paste" />
      </form>
    </div>
  );
};

export default Home;
