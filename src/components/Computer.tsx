import React, { CSSProperties } from 'react';

const styles = {
  parent: {
    overflowY: "scroll",
    maxHeight: "calc(50vh - 60px)",
    backgroundColor: "#FFF"
  } as CSSProperties,
};

function Computer() {
  return (
    <div style={styles.parent}>
    </div>
  );
}
  
export default Computer;