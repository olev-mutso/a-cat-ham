import { createTheme } from '@mui/material/styles';
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          '&.subject >.MuiTypography-root': {
            ...theme.typography.h5
          },
          '&.subject >.MuiDivider-root': {
            border: '1px solid', 
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(2),
          },
          '&.questionnaire': {
          }

        })
      }
    },
    MuiList: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          backgroundColor: undefined,
          '.success': {
            color: theme.palette.success.light,
          },
          '.error': {
            color: theme.palette.error.light + '!important', 
            textDecoration: 'line-through',
          },
          '.MuiButtonBase-root': {
            paddingTop: theme.spacing(0),
            paddingBottom: theme.spacing(0)
          }
        }),
        subheader: ({ ownerState, theme }) => ({
          '.MuiListSubheader-root': {
            backgroundColor: 'unset'
          },
          '.MuiListSubheader-root .MuiTypography-root': {
            ...theme.typography.h6
          },
        }),
      }
    },
    
  }
});