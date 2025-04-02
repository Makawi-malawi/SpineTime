import React, { useState } from "react";

const exercises = [
  {
    section: "Warm-up & Mobility",
    items: [
      "Neck Rolls (30s each direction)",
      "Chin Tucks – 10 reps",
      "Shoulder Rolls – 10 forward, 10 backward",
      "Scapular Retractions – 10 reps"
    ]
  },
  {
    section: "Stretching & Tension Relief",
    items: [
      "Suboccipital Release – 2 mins",
      "SCM Stretch – 30s per side x2",
      "Upper Trapezius Stretch – 30s per side x2",
      "Levator Scap Stretch – 30s per side x2",
      "Chest Opener – 1 min"
    ]
  },
  {
    section: "Dizziness-Specific Proprioception",
    items: [
      "Gaze Stabilization – 1 min each direction",
      "Balance on One Foot – 30s each side",
      "Marching in Place with Head Turns – 1 min"
    ]
  },
  {
    section: "Strengthening",
    items: [
      "Wall Angels – 2 sets of 10",
      "Resistance Band Rows – 2 sets of 12",
      "Shoulder External Rotation – 2 sets of 10",
      "Y-T-Ws – 2 sets each",
      "Prone Chin Tucks – 2 sets of 10"
    ]
  },
  {
    section: "Cool-down & Breathing",
    items: [
      "Diaphragmatic Breathing – 1–2 mins",
      "Gentle Neck Traction with Towel (optional)"
    ]
  }
];

export default function App() {
  const [completed, setCompleted] = useState({});

  const toggleComplete = (section, item) => {
    setCompleted((prev) => ({
      ...prev,
      [`${section}-${item}`]: !prev[`${section}-${item}`]
    }));
  };

  const resetAll = () => {
    setCompleted({});
  };

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ fontSize: 24, fontWeight: "bold" }}>Spinetime Tracker</h1>
      {exercises.map((group) => (
        <div key={group.section} style={{ marginBottom: 20 }}>
          <h2 style={{ fontSize: 18, marginTop: 10 }}>{group.section}</h2>
          <ul style={{ paddingLeft: 20 }}>
            {group.items.map((item) => (
              <li key={item} style={{ marginBottom: 8 }}>
                <label>
                  <input
                    type="checkbox"
                    checked={!!completed[`${group.section}-${item}`]}
                    onChange={() => toggleComplete(group.section, item)}
                  />
                  {" "}{item}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={resetAll} style={{ padding: 10, marginTop: 20 }}>
        Reset All
      </button>
    </div>
  );
              }
