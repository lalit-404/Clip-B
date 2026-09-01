import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearAllPastes, delFromPastes } from "../redux/slice/pasteSlice";

const Pastes = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  // The first paste is the key name given in store and the second name is the state name which is given in initialState
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleDeleteAll() {
    dispatch(clearAllPastes());
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">All Pastes</h1>

        {pastes.length > 0 && (
          <button className="danger-btn" onClick={handleDeleteAll}>
            Remove All Pastes
          </button>
        )}
      </div>

      {pastes.length === 0 ? (
        <div className="empty-state">
          <h3>Pastes is empty. Add some paste.</h3>
          <button className="primary-btn" onClick={() => navigate("/")}>
            Add Paste
          </button>
        </div>
      ) : (
        <div className="pastes-list">
          {pastes.map((elem) => (
            <div className="paste-card" key={elem.id}>
              <h3 className="paste-title">{elem.title}</h3>

              <p className="paste-content">{elem.content}</p>

              <div className="card-actions">
                <button
                  className="edit-btn"
                  onClick={() => {
                    navigate(`/pastes/${elem.id}`);
                  }}
                >
                  Edit Paste
                </button>

                <button
                  className="danger-btn"
                  onClick={() => {
                    dispatch(delFromPastes(elem.id));
                  }}
                >
                  Delete Paste
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Pastes;
