
// Your code goes here
class Agency {
    constructor(name) {
      if (typeof name !== "string") {
        throw new Error("Name must be a string");
      }
        this._name = name;
        this._agentList = [];
    }
    addAgent(agent) {
        this._agentList.push(agent);
    }
    get name() {
        return this._name;
    }
    get agentList() {
        return this._agentList;
    }
    set name(name) {
        if (typeof name !== "string") {
            throw new Error("Name must be a string");
        }
        this._name = name;
    }
    set agentList(agentList) {
        if (!Array.isArray(agentList)) {
            throw new Error("Agent list must be an array");
        }
        this._agentList = agentList;
    }
}
class Agent {
    constructor(name, id) {
      if (typeof name !== "string" || typeof id !== "string") {
        throw new Error("Name and ID must be a string");
      }
        this._name = name;
        this._id = id;
        this._objectives = [];
    }
    assignObjective(objective) {
        this._objectives.push(objective);
    }
    get name() {
        return this._name;
    }
    get id() {
        return this._id;
    }
    get objectives() {
        return this._objectives;
    }
    set name(name) {
        if (typeof name !== "string") {
            throw new Error("Name must be a string");
        }
        this._name = name;
    }
    set id(id) {
        if (typeof id !== "string") {
            throw new Error("ID must be a string");
        }
        this._id = id;
    }
    set objectives(objectives) {
        if (!Array.isArray(objectives)) {
            throw new Error("Objectives must be an array");
        }
        this._objectives = objectives;
    }
}
class Objective {
    constructor(description) {
      if (typeof description !== "string") {
        throw new Error("Description must be a string");
      }
        this._description = description;
    }
    get description() {
        return this._description;
    }
    set description(description) {
        if (typeof description !== "string") {
            throw new Error("Description must be a string");
        }
        this._description = description;
    }
}
class Surveillance extends Objective {
    constructor(description, target) {
      if (typeof description !== "string" || typeof target !== "string") {
        throw new Error("Description and target must be a string");
      }
        super(description);
        this._target = target;
    }
    get target() {
        return this._target;
    }

    set target(target) {
        if (typeof target !== "string") {
            throw new Error("Target must be a string");
        }
        this._target = target;
    }
}
class Elimination extends Objective {
    constructor(description, target) {
      if (typeof description !== "string" || typeof target !== "string") {
        throw new Error("Description and target must be a string");
      }
        super(description);
        this._target = target;
    }
    get target() {
        return this._target;
    }
    set target(target) {
        if (typeof target !== "string") {
            throw new Error("Target must be a string");
        }
        this._target = target;
    }
}
class Exfiltration extends Objective {
    constructor(description, location) {
      if (typeof description !== "string" || typeof location !== "string") {
        throw new Error("Description and location must be a string");
      }
        super(description);
        this._location = location;
    }
    get location() {
        return this._location;
    }
    set location(location) {
        if (typeof location !== "string") {
            throw new Error("Location must be a string");
        }
        this._location = location;
    }
}


//--------------------------------------------------------------------//
/* When you add a new class to this file, add the name of the class inside
brackets for it and allow jest to use it in test file. Each class added
inside brackets must be separated by commas. */
module.exports = { Agency, Agent, Objective, Surveillance, Elimination, Exfiltration };

