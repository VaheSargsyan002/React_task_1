import { useState } from "react";

function ReactionPanel() {
  const [likes, setLikes] = useState(0);
  const [saved, setSaved] = useState(false);

  return (
    <section className="card reaction-panel">
      <p className="section-label">Actions</p>
      <h3>Profile Reactions</h3>
      <p className="reaction-copy">
        Try a couple of interactions to see state updates in action.
      </p>

      <div className="reaction-actions">
        <button
          className="card-button"
          type="button"
          onClick={() => setLikes((currentLikes) => currentLikes + 1)}
        >
          Appreciate profile
        </button>
        <button
          className="card-button card-button-secondary"
          type="button"
          onClick={() => setSaved((currentSaved) => !currentSaved)}
        >
          {saved ? "Remove bookmark" : "Bookmark profile"}
        </button>
      </div>

      <p className="reaction-metric">Appreciations: {likes}</p>
      <p className="reaction-metric">Saved: {saved ? "Yes" : "No"}</p>
    </section>
  );
}

export default ReactionPanel;
