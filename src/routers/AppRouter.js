import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "../components/auth/SignIn";
import IntranetRouter from "./IntranetRouter";

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/iniciar-sesion" component={SignIn} />
                <Route path="/" component={IntranetRouter} />
            </Switch>
        </Router>
    );
}

export default AppRouter;
