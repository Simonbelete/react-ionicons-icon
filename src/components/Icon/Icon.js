import React from 'react';
import { propTypes } from './Icon.props';
import iconMap from './icon-map';

const EmptyIcon = () => <div />;

const Icon = ({ name, size, color, fill, ...rest }) => {
  const Icon = iconMap[name] || EmptyIcon;
  return <Icon color={color} style={{ width: size, height: size, fill: fill }} {...rest} />;
};

Icon.propTypes = propTypes;

Icon.defaultProps = {
  size: '32px',
  color: '#373737',
  fill: '#373737'
};

export default Icon;