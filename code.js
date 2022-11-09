import {connect} from "react-redux";
import {actionAllowed} from "../../redux/roles";
export default connect(
    state => ({
        scan: state.Scan.scan,
        translate: getTranslate(state.localize)
    }), {getScanVerdict, getScansSummary, actionAllowed})(Project);
