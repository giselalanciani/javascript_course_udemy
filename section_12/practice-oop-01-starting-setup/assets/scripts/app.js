class DOMHelper {
    static clearEventListeners(element){
        const clonedElement = element.cloneNode(true);
        element.replaceWith(clonedElement);
        return clonedElement;
    }
    static moveElement(elementId, newDestinationSelector) {
        const element = document.getElementById(elementId);
        const destinationElement = document.querySelector(newDestinationSelector);
        destinationElement.append(element);

    }
}
class Component {
    constructor (hostElementId, insertBefore = false) {
        if(hostElementId) {
            this.hostElementId = document.getElementById(hostElementId);
        } else {
            this.hostElementId = document.body;
        }
        this.insertBefore = insertBefore;
    }
    detach() {
        if(this.element){
            this.element.remove();
        }
    }
    attach() {
        this.hostElementId.insertAdjacentElement(this.insertBefore ? "afterbegin" : "beforeend", this.element);
    }
}



class Tooltip extends Component{
    constructor(closeNotifierFunction) {
        super();
        this.closeNotifier = closeNotifierFunction;
        this.create();
    }
    closeToolTip = () => {
        this.detach();
        this.closeNotifier();
    };
    create() {
    const toolTipElement = document.createElement("div");
    toolTipElement.className = "card";
    toolTipElement.textContent = "DUMMY";
    toolTipElement.addEventListener("click", this.closeToolTip);
    this.element = toolTipElement;
    }

}
    

class ProjectItem {
    hasActiveToolTip = false;
    constructor(id, updateProjectListsFunction, type) {
        this.id = id;
        this.updateProjectListsHandler = updateProjectListsFunction;
        this.connectMoreInfoButton();
        this.connectSwitchButton(type);
    }

    showmoreInfoHandler() {
        if(this.hasActiveToolTip) {
            return;

        }
        const tooltip = new Tooltip(() => {
            this.hasActiveToolTip = false;
        });
        tooltip.attach();
        this.hasActiveToolTip = true;
      
    }

    connectMoreInfoButton() {
        const projectItemElement = document.getElementById(this.id);
        const connectMoreInfoButton = projectItemElement.querySelector("button:first-of-type");
        moreInfoBtn.addEventListener("click", this.showmoreInfoHandler);

    }

    connectSwitchButton(type) {
        const projectItemElement = document.getElementById(this.id);
        let switchBtn = projectItemElement.querySelector("button: last-of-type");
        switchBtn = DOMHelper.clearEventListeners(switchBtn);
        switchBtn.textContent = type === "active" ? "Finish" : "Activate";
        switchBtn.addEventListener("click" , this.updateProjectListsHandler.bind(null, this.id));

    }
    update (updateProjectListsFn, type) {
        this.updateProjectListsHandler = updateProjectListsFn;
        this.connectSwitchButton(type);

    }
}


class ProjectList {
    projects = [];

    constructor (type) {
        this.type = type;
        const prjItems = document.querySelectorAll(`#${type}-proyect li`);
        for (const prjItem of prjItems) {
            this.project.push(new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type));
        }
        console.log(this.projects);
    }
    

setSwitchHandlerFunction(setSwitchHandlerFunction){
    this.switchHandler = switchHandlerFunction;
}

    addProject(project) {
        this.project.push(project);
        DOMHelper.moveElement(project.id `#${this.type}-projects ul`);
        project.update(this.switchProject.bind(this), this.type);
    }


    switchProject(projectId) {
        //const projectIndex = this.projects.findIndex(p => p.id === projectId);
        //this.project.splice(projectIndex, 1);
        this.switchHandler(this.projects.find(p => p.id === projectId));
        this.projects = this.projects.filter(p => p.id !== projectId);
    }


}


class App {
    static init() {
        const activeProjectList = new ProjectList("active");
        const finishedProjectList = new ProjectList("finished");
        activeProjectList.setSwitchHandlerFunction(finishedProjectList.addProject.bind(finishedProjectList));
        finishedProjectList.setSwitchHandlerFunction(activeProjectList.addProject.bind(activeProjectList));
    }
}

App.init();


