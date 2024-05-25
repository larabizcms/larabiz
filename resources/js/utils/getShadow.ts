import PropTypes from 'prop-types';

const getShadow = (theme: any, shadow: any) => {
  switch (shadow) {
    case 'secondary':
      return theme.customShadows.secondary;
    case 'error':
      return theme.customShadows.error;
    case 'warning':
      return theme.customShadows.warning;
    case 'info':
      return theme.customShadows.info;
    case 'success':
      return theme.customShadows.success;
    case 'primaryButton':
      return theme.customShadows.primaryButton;
    case 'secondaryButton':
      return theme.customShadows.secondaryButton;
    case 'errorButton':
      return theme.customShadows.errorButton;
    case 'warningButton':
      return theme.customShadows.warningButton;
    case 'infoButton':
      return theme.customShadows.infoButton;
    case 'successButton':
      return theme.customShadows.successButton;
    default:
      return theme.customShadows.primary;
  }
};

getShadow.propTypes = {
  theme: PropTypes.object,
  shadow: PropTypes.string
};

export default getShadow;
