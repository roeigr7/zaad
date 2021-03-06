import React, { Component } from "react";

import { connect } from "react-redux";
import FormProject from "../forms/FormProject";
import { isEmpty } from "react-redux-firebase";

import { updateProject,  getSingleProject } from "../Redux/actions/projectsActions";
import { PageLayout } from "../style/style";

class EditProjectPage extends Component {
  async componentDidMount() {
    let{match,project}=this.props;
    if(isEmpty(project)) {
      await this.props.getSingleProject(match.params.id);
  }
  }
submitEdit = async(values) =>{
    await this.props.updateProject(values)         
  this.props.history.push("/portfolio")
  }
  render() {
  const {project,history}=this.props

    return (
<PageLayout>
            <FormProject formTitle={'עריכת פרויקט'}
             cancel={()=>history.push("/home")}
             initialValues={project}
              project={project}
              onSubmit={this.submitEdit}
              
            />

</PageLayout>
    );
  }
}
const actions={
  updateProject,
  getSingleProject
}

const mapStateToProps = (state,ownProps) => {

  const urlId=ownProps.match.params.id;
  let project={}
  if(state.projects&&urlId&&state.projects.length>0){

    project=state.projects.filter(project=>project.id===urlId)[0]
  }
  return{
    project,
    initialValues:project,

  }
}

export default connect(mapStateToProps,actions)(EditProjectPage)
 

