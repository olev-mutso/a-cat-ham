import { useMediaQuery } from '@mui/material';
import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          '&.question': {
            marginBottom: theme.spacing(4)
          },
          '.question-actions': {
            marginTop: theme.spacing(1),
            display: 'flex',
            gap: theme.spacing(1),

            flexDirection: useMediaQuery(theme.breakpoints.down('sm')) ? 'column' : 'row',
            alignItems: useMediaQuery(theme.breakpoints.down('sm')) ? 'end' : undefined
          },
          '.translator-text.MuiTypography-root ': {
            fontSize: useMediaQuery(theme.breakpoints.down('sm')) ? theme.typography.caption.fontSize : theme.typography.body2.fontSize,
            fontWeight: 'bold',
          },
          '&.questionnaire-results': {
            backgroundColor: theme.palette.success.dark,
            zIndex: 1000000
          }
        })
      }
    },

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
          },
          '&.questionnaire-results >.MuiTypography-root': {
            ...theme.typography.h6
          },
          '&.questionnaire-header': {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
          },
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
            backgroundColor: 'unset',
            position: 'unset'
          },
          '.MuiListSubheader-root .MuiTypography-root': {
            ...theme.typography.h6
          },
        }),
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          userSelect: 'text'
        }
      }
    }
    
  }
});