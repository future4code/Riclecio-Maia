import { createTheme} from '@mui/material/styles';

export const theme = createTheme({
    palette:{
            primary:{
                light: '#464649',
                main: '#1F1F23',
                dark: '#18181B'
            },
    
            secondary:{
                light: '#D3D3D3',
                main: '#6495ED',
                dark: '#6C3DB3'
            },
    
            background:{
                default:'#18181B'
            }
    }
});