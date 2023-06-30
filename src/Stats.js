import React from "react";

function Stats({ numItems, numPacked, items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      {percentage !== 100 ? (
        <em>
          💼You have {numItems} items on your list, and you already packed{" "}
          {numPacked} ({!numPacked ? 0 : percentage}
          %)
        </em>
      ) : (
        <em>You got everything! Ready to go ✈️</em>
      )}
    </footer>
  );
}

export default Stats;
