import zIndex from "@material-ui/core/styles/zIndex";

export const MaterialThemeOverrides =
{
  // Style sheet name ⚛️
  MuiButton: {
    // Name of the rule
    text: {
      // Some CSS
      background: 'linear-gradient(45deg, rgb(194, 60, 7), rgb(195, 41, 93))',
      backgroundClip: 'text',
      textFillColor: '#fff',
      textAlign: 'center',
      borderRadius: 3,
      border: 0,
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      cursor: 'pointer',
      zIndex: 999
    },
  },
}
