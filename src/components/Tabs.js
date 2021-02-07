import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import ForumIcon from '@material-ui/icons/Forum';
import { BrowserRouter as Link, Route} from "react-router-dom";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
});

function IconLabelTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        // onChange={handleChange}
        onChange={<Link to='/myPath'></Link>}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
      <Route path="/" exact>

        <Tab icon={<InsertCommentIcon />} label="Comment board"/>
      </Route>
      <Link to="/imgupload" >
        
        <Tab icon={<PermMediaIcon />} label="Upload images" />
        </Link>

        <Tab icon={<ForumIcon />} label="Messages" />
      </Tabs>
    </Paper>
  );
}
export default withRouter(IconLabelTabs)