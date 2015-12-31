/**
 * Created by Evgeniy Chaika on 10.10.2015.
 */
//--------constructor IT worker-------

function WorkerIT(fullname, age, sex, salary, born, job) {
    this.fullname = fullname;
    this.age = age;
    this.sex = sex;
    this.salary = salary;
    this.born = born;
    this.job = job;

}
WorkerIT.prototype.getFullNam = function () {
    return this.fullname;
};

WorkerIT.prototype.getAge = function () {
    return this.age;
};
WorkerIT.prototype.getSex = function () {
    return this.sex;
};
WorkerIT.prototype.getSalary = function () {
    return this.salary;
};
WorkerIT.prototype.getBorn = function () {
    return this.born;
};
WorkerIT.prototype.getJob = function () {
    return this.job;
};
WorkerIT.prototype.setJob = function (job) {
    this.job = job;
};
WorkerIT.prototype.setSalary = function (salar , k) {
    this.salary = salar*k;
};


WorkerIT.prototype.goWork = function () {
    console.log("I'm go to  work!");
};
WorkerIT.prototype.goVacation = function () {
    console.log("I'm going to rest somewhere!");
};
WorkerIT.prototype.goHospital = function () {
    console.log("I'm ill today!");
};
WorkerIT.prototype.learnEnglish = function () {
    console.log("I'm need to learn English!");
};
WorkerIT.prototype.getITinfo = function () {
    console.log("------------Information about employee--------");
    console.log("     Name: " + this.getFullNam());
    console.log("     Age: " + this.getAge());
    console.log("     Male: " + this.getSex());
    console.log("     Salary : " + this.getSalary());
    console.log("     Date of birth : " + this.getBorn());
    console.log("     Position: " + this.getJob());
};

//------Clerk constructor--------

function Clerk() {
    WorkerIT.apply(this, arguments);

}
Clerk.prototype.constructor = Clerk;
Clerk.prototype = Object.create(WorkerIT.prototype);


Clerk.prototype.makeHappy = function () {
    console.log("I'm make all happy!");
};
Clerk.prototype.makeOfficeGood = function () {
    console.log("I'm make office good!");
};

//---------constructor Office Manager-------

function OfficeManager() {
    Clerk.apply(this, arguments);
}
OfficeManager.prototype.constructor = OfficeManager;
OfficeManager.prototype = new Clerk();

OfficeManager.prototype.watchOrder = function () {
    console.log("I look for order in the office!");
};

//------------constructor Accountant----------

function Accountant() {
    Clerk.apply(this, arguments);
}
Accountant.prototype.constructor = Accountant;
Accountant.prototype = new Clerk();

Accountant.prototype.countSalary = function () {
    console.log("I'm expect salary!");

};

//------------constructor HR----------

function HR() {
    Clerk.apply(this, arguments);
}
HR.prototype.constructor = HR;
HR.prototype = new Clerk();

HR.prototype.doMeetings = function () {
    console.log("I'm do meetings!");
};
HR.prototype.doCelebrations = function () {
    console.log("I'm do celebrations!");
};

//------------constructor Cleaner----------

function Cleaner() {
    Clerk.apply(this, arguments);
}

Cleaner.prototype.constructor = Cleaner;
Cleaner.prototype = new Clerk();

Cleaner.prototype.cleanOffice = function () {
    console.log("I'm clean office!");
};
Cleaner.prototype.learnEnglish = function () {
    console.log("I  don't need English!");
};

//------------constructor IT----------

function IT() {
    WorkerIT.apply(this, arguments);
}
IT.prototype.constructor = IT;
IT.prototype = Object.create(WorkerIT.prototype);

IT.prototype.makeProject = function () {
    console.log("I'm make project!");
};

//------------constructor Project Manager----------

function ProjectManager() {
    IT.apply(this, arguments);
}
ProjectManager.prototype.constructor = ProjectManager;
ProjectManager.prototype = new IT();

ProjectManager.prototype.speakCustomer = function () {
    console.log("I'm speak with customer about project!");
};
ProjectManager.prototype.scouldTeamLead = function () {
    console.log("Your version 2.7 is bad!");
};

//------------constructor CTO----------

function CTO() {
    IT.apply(this, arguments);
}
CTO.prototype.constructor = CTO;
CTO.prototype = new IT();

CTO.prototype.watchEverything = function () {
    console.log("I'm boss!");
};
CTO.prototype.scouldProjectManager = function () {
    console.log("Do it faster!!!!");
};

//------------constructor Programmer----------

function Programmer() {
    IT.apply(this, arguments);
}
Programmer.prototype.constructor = Programmer;
Programmer.prototype = Object.create(IT.prototype);

Programmer.prototype.makeCode = function () {
    console.log("My work is codding!!");
};
Programmer.prototype.testBugs = function () {
    console.log("I'm search bugs!!");
};
Programmer.prototype.studyTechnologys = function () {
    console.log("I'm always study!!");
};

//------------constructor Junior----------

function Junior() {
    Programmer.apply(this, arguments);
}
Junior.prototype.constructor = Junior;
Junior.prototype = new Programmer();

Junior.prototype.listenMiddle = function () {
    console.log("I'm listen Middle!");
};
Junior.prototype.listenSenior = function () {
    console.log("I'm listen Senior!!");
};
Junior.prototype.listenTeamLead = function () {
    console.log("I'm listen TeamLead!");
};

//------------constructor Middle----------

function Middle() {
    Programmer.apply(this, arguments);
}
Middle.prototype.constructor = Middle;
Middle.prototype = new Programmer();

Middle.prototype.teachJunior = function () {
    console.log("I'm teach Junior!");
};
Middle.prototype.listenSenior = function () {
    console.log("I'm listen Senior!!");
};
Middle.prototype.listenTeamLead = function () {
    console.log("I'm listen TeamLead!");
};
Middle.prototype.scouldJunior = function () {
    console.log("I'm scould Junior!");
};

//------------constructor Senior----------

function Senior() {
    Programmer.apply(this, arguments);
}
Senior.prototype.constructor = Senior;
Senior.prototype = new Programmer();

Senior.prototype.teachJunior = function () {
    console.log("I'm teach Junior!");
};
Senior.prototype.teachMiddle = function () {
    console.log("I'm teach Middle!!");
};

Senior.prototype.scouldJunior = function () {
    console.log("I'm scould Junior!");
};
Senior.prototype.scouldMiddle = function () {
    console.log("I'm scould Middle!");
};
Senior.prototype.listenTeamLead = function () {
    console.log("I'm listen TeamLead!");
};
Senior.prototype.listenTechLead = function () {
    console.log("I'm listen TechLead!");
};

//------------constructor TeamLead----------

function TeamLead() {
    Programmer.apply(this, arguments);
}
//TeamLead.prototype.constructor = TeamLead;
TeamLead.prototype = new Programmer();

TeamLead.prototype.watchTeam = function () {
    console.log("I'm team leader!");
};
TeamLead.prototype.scouldJunior = function () {
    console.log("I'm scould Junior!!");
};

TeamLead.prototype.scouldMiddle = function () {
    console.log("I'm scould Middle!");
};
TeamLead.prototype.scouldSenior = function () {
    console.log("I'm scould Senior!");
};

//------------constructor TechLead----------

function TechLead() {
    Programmer.apply(this, arguments);
}
TechLead.prototype.constructor = TechLead;
TechLead.prototype = new Programmer();

TechLead.prototype.makeArchitecture = function () {
    console.log("I'm make architecture!");
};
TechLead.prototype.scouldJunior = function () {
    console.log("I'm scould Junior!!");
};

TechLead.prototype.scouldMiddle = function () {
    console.log("I'm scould Middle!");
};
TechLead.prototype.scouldSenior = function () {
    console.log("I'm scould Senior!");
};


var teamLead = new TeamLead("SteveJobs", 18, "man", 500, 1990, "teamlead");

console.log("--------------teamlead------------");
teamLead.learnEnglish();
teamLead.makeCode();
teamLead.goWork();
teamLead.makeProject();
teamLead.watchTeam();
var b = teamLead.getFullNam();
console.log(b);
var n = teamLead.getJob();
console.log(n);

console.log("--------------cleaner------------");
var cleaner = new Cleaner("SaraConnor", 45, "woman", 200, 1956, "cleaner");
console.log(cleaner.constructor.name);
cleaner.cleanOffice();
cleaner.learnEnglish();
cleaner.makeHappy();
cleaner.goHospital();
var s = cleaner.getBorn();
console.log(s);
var cleaner2 = new Cleaner("SaRennor", 35, "woman", 2000, 1967, "cleaner");

console.log("--------------accountant------------");
var acc = new Accountant("TeraBannor", 35, "woman", 2000, 1976, "accountant");
acc.countSalary();
var z = acc.getAge();
console.log(z);
acc.makeOfficeGood();
acc.goVacation();

console.log("--------------it------------");
var it = new WorkerIT("TeraBtf", 35, "woman", 2000, 1976, "accountant");
var i = it.getAge();
console.log(i);
it.goHospital();
it.goVacation();

//----------------------Sorter----------------------

function Sorter() {
    this.sortArray = {
        OfficeManager: [],
        HR: [],
        Accountant: [],
        Cleaner: [],
        Junior: [],
        Middle: [],
        Senior: [],
        TeamLead: [],
        TechLead: [],
        ProjectManager: [],
        CTO: []
    };
}

Sorter.prototype.addMember = function (object) {
    if (object instanceof OfficeManager) {
        this.sortArray.OfficeManager.push(object);
        return this.sortArray;
    }
    if (object instanceof HR) {
        this.sortArray.HR.push(object);
        return this.sortArray;
    }
    if (object instanceof Accountant) {
        this.sortArray.Accountant.push(object);
        return this.sortArray;
    }
    if (object instanceof Cleaner) {
        this.sortArray.Cleaner.push(object);
        return this.sortArray;
    }
    if (object instanceof Junior) {
        this.sortArray.Junior.push(object);
        return this.sortArray;
    }
    if (object instanceof Middle) {
        this.sortArray.Middle.push(object);
        return this.sortArray;
    }
    if (object instanceof Senior) {
        this.sortArray.Senior.push(object);
        return this.sortArray;
    }
    if (object instanceof TeamLead) {
        this.sortArray.TeamLead.push(object);
        return this.sortArray;
    }
    if (object instanceof TechLead) {
        this.sortArray.TechLead.push(object);
        return this.sortArray;
    }
    if (object instanceof ProjectManager) {
        this.sortArray.ProjectManager.push(object);
        return this.sortArray;
    }
    if (object instanceof CTO) {
        this.sortArray.CTO.push(object);
        return this.sortArray;
    }
    return this.sortArray;
};

Sorter.prototype.getStatistics = function () {
    for (var key in this.sortArray) {
        if (this.sortArray.hasOwnProperty(key) && this.sortArray[key] instanceof Array) {
            for(var a =0; a < this.sortArray[key].length; a++){
                if (typeof this.sortArray[key][a].getITinfo == 'function') {
                    this.sortArray[key][a].getITinfo();
                }
            }
        }
    }
};

var sorter = new Sorter();
sorter.addMember(teamLead);
sorter.addMember(cleaner);
sorter.addMember(cleaner2);
sorter.addMember(acc);

console.log('test', teamLead instanceof TeamLead, teamLead instanceof Programmer);

console.log(sorter);
sorter.getStatistics();


function myFunction1(object, string) {
    if (object.hasOwnProperty(string)) {
        return object[string];
    }
    return "Property not found!";
}

function myFunction2(object, string) {
    for (var k in object) {
        if (k == string && typeof object[string] == 'function') {
            return object[string]();
        }
    }
    return "The method is not found!";
}


function myFunction3(object, string, array) {
    for (var k in object) {
        if (k == string && object[string] instanceof Function) {
            return object[string].apply(object, array);
        }
    }
    return "The method is not found!";
}



console.log(myFunction1(cleaner, "fullname"));
console.log(myFunction2(cleaner, "learnEnglish"));
myFunction3(cleaner, "setSalary", [300, 5]);

console.log(cleaner.getSalary());