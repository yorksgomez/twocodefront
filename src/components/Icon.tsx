import React, { CSSProperties } from 'react';
import Logo from '../resources/images/logo.png';

const styles = {
  iconParent: {
    padding: 40
  } as CSSProperties,
  icon: {
    height: '100%'
  } as CSSProperties
};

function Icon() {
  return (
    <div style={styles.iconParent}>
      <img src={Logo} alt="2Code logo" style={styles.icon} />
    </div>
  );
}
  
export default Icon;