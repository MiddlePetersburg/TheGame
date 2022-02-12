import React from "react";
import { connect } from "react-redux";

// Components
import Fabric from "../components/pages/GameFabric";

// eslint-disable-next-line @typescript-eslint/no-shadow
const FabricContainer = () => <Fabric />;

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {})(FabricContainer);
