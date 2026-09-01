import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateToPastes } from "../redux/slice/pasteSlice";

const ViewPastes = () => {
  // id is simple object so that's why i have destructured it
  const { id } = useParams();
  // console.log(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const pastes = useSelector((state) => state.paste.pastes);
  const pasteToEdit = pastes.find((p) => p.id === id);

  const [title, setTitle] = useState(pasteToEdit?.title || "");
  const [content, setContent] = useState(pasteToEdit?.content || "");

  function updateHandler() {
    const newPaste = {
      id: id,
      title: title,
      content: content,
      updatedAt: new Date().toISOString(),
    };
    dispatch(updateToPastes(newPaste));
    navigate("/pastes");
  }

  return (
    <div className="page-container">
      <div className="form-card">
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

        <button
          className="primary-btn"
          onClick={() => {
            updateHandler();
          }}
        >
          Update Paste
        </button>
      </div>
    </div>
  );
};

export default ViewPastes;
