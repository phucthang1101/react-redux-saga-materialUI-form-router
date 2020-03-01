import { ThemeProvider } from "@material-ui/core";

const styles = (theme) =>({
    drawerPaper: {
        width: 240,
        position: 'relative',
        height: '100vh'
      },
      MenuLink:{
        textDecoration: 'none',
        color: theme.color.defaultTextColor,
      },
      MenuLinkActive:{
        "&>div":{
          backgroundColor: theme.color.hover
        }
      }
})

export default styles;